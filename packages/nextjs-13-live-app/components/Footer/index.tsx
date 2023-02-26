import Link from "next/link";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link
        href="https://github.com/mateusabelli/roundest-next-13"
        target={"_blank"}
        className={styles.link}
      >
        <span>GitHub</span>
        <span>&rarr;</span>
      </Link>

      <Link href="/results" className={styles.link}>
        <span>Results</span>
        <span>&rarr;</span>
      </Link>

      <Link href="/about" className={styles.link}>
        <span>About</span>
        <span>&rarr;</span>
      </Link>
    </footer>
  );
}
