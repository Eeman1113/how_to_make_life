import Image from "next/image";
import type { Node, Span } from "@/content/article";
import styles from "./Prose.module.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Runs({ spans }: { spans: Span[] }) {
  return (
    <>
      {spans.map((s, i) => (s.b ? <strong key={i}>{s.t}</strong> : <span key={i}>{s.t}</span>))}
    </>
  );
}

export default function Prose({ nodes }: { nodes: Node[] }) {
  return (
    <>
      {nodes.map((n, i) => {
        switch (n.kind) {
          case "p":
            return (
              <p key={i} className={n.lede ? styles.lede : undefined}>
                <Runs spans={n.spans} />
              </p>
            );

          case "aspect":
            return (
              <section
                key={i}
                className={styles.aspect}
                id={`aspect-${n.n.toLowerCase()}`}
              >
                <p className={styles.eyebrow}>
                  {n.n === "Coda" ? "Coda" : `Aspect ${n.n}`}
                </p>
                <h2 className={styles.aspectTitle}>{n.title}</h2>
              </section>
            );

          case "list":
            return (
              <ul key={i} className={styles.list}>
                {n.items.map((item, j) => (
                  <li key={j}>
                    <Runs spans={item} />
                  </li>
                ))}
              </ul>
            );

          case "figure":
            return (
              <figure key={i} className={styles.figure}>
                <div className={styles.figScroll}>
                  <Image
                    src={`${BASE}/figures/${n.src}.png`}
                    alt={n.caption}
                    width={n.w * 2}
                    height={n.h * 2}
                    sizes="(max-width: 900px) 760px, 62rem"
                    priority={i < 2}
                  />
                </div>
                <figcaption>
                  {n.caption}
                  <span className={styles.panHint}>drag to see all of it</span>
                </figcaption>
              </figure>
            );
        }
      })}
    </>
  );
}
