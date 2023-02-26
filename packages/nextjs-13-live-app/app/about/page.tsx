import styles from "./styles.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Welcome to Roundest Mon!</h2>
      <br />
      <p>
        This app was originally created by{" "}
        <a target="_blank" href="https://github.com/t3dotgg" rel="noreferrer">
          Theo @t3dotgg
        </a>{" "}
        on his YouTube channel. I followed along with his video and built a very
        similar app, however I wanted to try making it on my own to see if I
        could do it as well. So this is the result.
      </p>

      <br />

      <p>Additional details:</p>

      <ul>
        <li>Where is the source code?</li>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/mateusabelli/roundest-next-13"
              rel="noreferrer"
            >
              Here it is
            </a>
          </li>
        </ul>

        <li>Why remaking this with Next.js 13 Beta features?</li>
        <ul>
          <li>I needed to understand how the app directory worked</li>
        </ul>

        <li>Why not use Tailwind?</li>
        <ul>
          <li>Because it has been a while since I last coded with pure CSS</li>
        </ul>

        <li>Why not use tRPC?</li>
        <ul>
          <li>I still have no idea of how it works</li>
        </ul>
      </ul>
    </main>
  );
}
