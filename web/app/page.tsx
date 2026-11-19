import Prose from "@/components/Prose";
import { article } from "@/content/article";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <header className={styles.masthead}>
        <p className={styles.kicker}>Generative Life Agents</p>
        <h1 className={styles.title}>How to make life?</h1>
        <p className={styles.byline}>
          <span>Eeman Majumder</span>
        </p>
      </header>

      <main className={styles.main}>
        <Prose nodes={article} />
      </main>
    </div>
  );
}
