import Prose from "@/components/Prose";
import { article } from "@/content/article";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <header className={styles.masthead}>
        <p className={styles.kicker}>Generative Life Agents</p>
        <h1 className={styles.title}>Fifteen aspects of making a life</h1>
        <p className={styles.standfirst}>
          I set out to build persistent agents. Somewhere in the middle of
          building them I realised every engineering decision I was making was
          also a position on what a god is, what a soul is made of, and why
          nobody has heard directly from anything above them in about two
          thousand years.
        </p>
        <p className={styles.byline}>
          <span>Eeman Majumder</span>
          <span>Essay</span>
          <span>
            Figures drawn with{" "}
            <a href="https://github.com/Eeman1113/handwriter">handwriter</a>
          </span>
        </p>
      </header>

      <main className={styles.main}>
        <Prose nodes={article} />
      </main>

      <footer className={styles.footer}>
        <p>
          Generative Life Agents &middot; a persistent world, two models, and
          fifteen things it commits you to.
        </p>
        <p>
          Every word in the figures is real handwriting, sampled one pen
          movement at a time.
        </p>
      </footer>
    </div>
  );
}
