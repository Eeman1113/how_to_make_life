import re, json

src = open('theology.md').read()

FIGS = {
 '01-two-models': ('**Aspect one: the creator is not a presence', 'The two models, and the loop between them', 'before', 1240, 800),
 '03-channel':    ('That asymmetry is not cruelty and it is not surveillance.', 'The channel, and the asymmetry it runs on', 'after', 1440, 940),
 '04-wall':       ('I did not design this into Sira. It emerged, and it taught me how containment actually works.', 'A restriction informs you. An absence does not.', 'before', 1460, 880),
 '02-memory':     ('That gives me something I did not have to program: **drift.**', 'Memory as a process, not a store', 'before', 1500, 820),
 '06-death':      ('That last one is the one I would want someone to argue with me about.', 'The capacity ceiling, and what happens when it is reached', 'before', 1460, 940),
 '05-silence':    ('And notice how neatly it inverts what the silence is usually taken to mean.', 'Contact over time, read as an engineering curve', 'before', 1440, 880),
 '07-recursion':  ('And the recursion does not stop, which is the genuinely vertiginous part.', 'Every level runs the same argument', 'before', 1320, 940),
}

WORDS = ('one two three four five six seven eight nine ten eleven twelve '
         'thirteen fourteen fifteen').split()

def spans(t):
    """Split a string into [{t:'...'},{t:'...',b:true}] runs."""
    out, i = [], 0
    for m in re.finditer(r'\*\*(.+?)\*\*', t, re.S):
        if m.start() > i:
            out.append({'t': t[i:m.start()]})
        out.append({'t': m.group(1), 'b': True})
        i = m.end()
    if i < len(t):
        out.append({'t': t[i:]})
    return out

blocks = [b.strip() for b in src.split('\n\n') if b.strip()]
nodes = []

def fig(key):
    cap, w, h = FIGS[key][1], FIGS[key][3], FIGS[key][4]
    nodes.append({'kind': 'figure', 'src': key, 'caption': cap, 'w': w, 'h': h})

for b in blocks:
    for key, (anchor, _c, pos, _w, _h) in FIGS.items():
        if b.startswith(anchor) and pos == 'before':
            fig(key)

    m = re.match(r'^\*\*Aspect (\w+): (.+?)\*\*$', b, re.S)
    if b.startswith('- '):
        items = [spans(l[2:].strip()) for l in b.split('\n') if l.strip().startswith('- ')]
        nodes.append({'kind': 'list', 'items': items})
    elif m:
        word, title = m.group(1), m.group(2).replace('\n', ' ')
        n = WORDS.index(word) + 1
        title = title[0].upper() + title[1:]
        nodes.append({'kind': 'aspect', 'n': str(n).zfill(2), 'title': title})
    elif b == '**And the one sentence underneath all of it.**':
        nodes.append({'kind': 'aspect', 'n': 'Coda',
                      'title': 'And the one sentence underneath all of it'})
    else:
        nodes.append({'kind': 'p', 'spans': spans(b.replace('\n', ' ')),
                      'lede': len(nodes) == 0})

    for key, (anchor, _c, pos, _w, _h) in FIGS.items():
        if b.startswith(anchor) and pos == 'after':
            fig(key)

ts = """// Generated from theology.md. Do not edit by hand.
export type Span = { t: string; b?: boolean };

export type Node =
  | { kind: "p"; spans: Span[]; lede?: boolean }
  | { kind: "aspect"; n: string; title: string }
  | { kind: "list"; items: Span[][] }
  | { kind: "figure"; src: string; caption: string; w: number; h: number };

export const article: Node[] = %s;
""" % json.dumps(nodes, indent=2, ensure_ascii=False)

open('web/content/article.ts', 'w').write(ts)
print('nodes:', len(nodes),
      '| aspects:', sum(1 for n in nodes if n['kind'] == 'aspect'),
      '| figures:', sum(1 for n in nodes if n['kind'] == 'figure'))
