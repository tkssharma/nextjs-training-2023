import Link from 'next/link';

function App({ children }:any) {
  return (
    <html lang="en-US">
      <head>
        <title>Lil Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav>
          <ol>
            <li>
              <Link href="/news" style={{ backgroundColor: 'var(--links)' }}>
                News
              </Link>
            </li>
            <li>
              <Link href="/weather" style={{ backgroundColor: 'var(--sunny)' }}>
                Weather
              </Link>
            </li>
          </ol>
        </nav>
        {children}
      </body>
    </html>
  );
}

export default App;
