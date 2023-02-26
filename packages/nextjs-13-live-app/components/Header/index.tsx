import Link from "next/link";
import styles from "./styles.module.css";

interface HeaderProps {
  text: string;
  overrideLinks?: {
    firstLinkHref?: string;
    secondLinkHref?: string;
  };
}

export default function Header({ text, overrideLinks }: HeaderProps) {
  if (overrideLinks) {
    return (
      <header className={styles.header}>
        <Link
          className={styles.NavLink}
          href={overrideLinks?.firstLinkHref ?? "/"}
        >
          <span>&larr; </span>
          {overrideLinks?.firstLinkHref ?? "Home"}
        </Link>

        <h1>{text}</h1>

        <Link
          className={styles.NavLink}
          href={overrideLinks?.secondLinkHref ?? "/"}
        >
          {overrideLinks?.secondLinkHref ?? "Home"}
          <span> &rarr;</span>
        </Link>
      </header>
    );
  } else {
    return (
      <header className={styles.header}>
        <h1>{text}</h1>
      </header>
    );
  }
}
