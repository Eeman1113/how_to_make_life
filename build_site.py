import re, html, os

src = open('theology.md').read()

FIGS = {
 '01-two-models': ('**Aspect one: the creator is not a presence', 'The two models, and the loop between them', 'before'),
 '03-channel':    ('That asymmetry is not cruelty and it is not surveillance.', 'The channel, and the asymmetry it runs on', 'after'),
 '04-wall':       ('I did not design this into Sira. It emerged, and it taught me how containment actually works.', 'A restriction informs you. An absence does not.', 'before'),
 '02-memory':     ('That gives me something I did not have to program: **drift.**', 'Memory as a process, not a store', 'before'),
 '06-death':      ('That last one is the one I would want someone to argue with me about.', 'The capacity ceiling, and what happens when it is reached', 'before'),
 '05-silence':    ('And notice how neatly it inverts what the silence is usually taken to mean.', 'Contact over time, read as an engineering curve', 'before'),
 '07-recursion':  ('And the recursion does not stop, which is the genuinely vertiginous part.', 'Every level runs the same argument', 'before'),
}

def inline(t):
    t = html.escape(t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    return t

WORDS = ('one two three four five six seven eight nine ten eleven twelve '
         'thirteen fourteen fifteen').split()

blocks = [b.strip() for b in src.split('\n\n') if b.strip()]
out = []
n_aspect = 0
pending_fig = []

def fig_html(key, cap):
    return (f'<figure class="fig">\n'
            f'  <img src="figures/{key}.png" alt="{html.escape(cap)}" loading="lazy" decoding="async">\n'
            f'  <figcaption>{html.escape(cap)}</figcaption>\n'
            f'</figure>')

for b in blocks:
    for key,(anchor,cap,pos) in FIGS.items():
        if b.startswith(anchor) and pos == 'before':
            out.append(fig_html(key, cap))
    if b.startswith('- '):
        items = [inline(l[2:].strip()) for l in b.split('\n') if l.strip().startswith('- ')]
        out.append('<ul>\n' + '\n'.join(f'  <li>{i}</li>' for i in items) + '\n</ul>')
    elif re.match(r'^\*\*Aspect (\w+): (.+?)\*\*$', b, re.S):
        m = re.match(r'^\*\*Aspect (\w+): (.+?)\*\*$', b, re.S)
        n_aspect += 1
        word, title = m.group(1), m.group(2).replace('\n',' ')
        num = str(WORDS.index(word)+1).zfill(2) if word in WORDS else str(n_aspect).zfill(2)
        out.append(f'<section class="aspect" id="aspect-{num}">\n'
                   f'  <p class="eyebrow">Aspect {num}</p>\n'
                   f'  <h2>{inline(title)}</h2>\n</section>')
    elif b == '**And the one sentence underneath all of it.**':
        out.append('<section class="aspect coda">\n  <p class="eyebrow">Coda</p>\n'
                   '  <h2>And the one sentence underneath all of it</h2>\n</section>')
    else:
        cls = ' class="lede"' if len(out) == 0 else ''
        out.append(f'<p{cls}>{inline(b)}</p>')
    for key,(anchor,cap,pos) in FIGS.items():
        if b.startswith(anchor) and pos == 'after':
            out.append(fig_html(key, cap))

body = '\n\n'.join(out)
open('site/_body.html','w').write(body)
print('sections:', n_aspect, '| blocks:', len(out), '| figures:', body.count('<figure'))
