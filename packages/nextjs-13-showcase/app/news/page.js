import Timestamp from './timestamp';

export default async function Page() {
  const { articles } = await fetch('https://api.lil.software/news', {
    next: { revalidate: 15 },
  }).then((res) => res.json());

  return (
    <main>
      <h1>News</h1>
      <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
        {articles.map((article) => (
          <li key={article.url} style={{ marginBottom: '1rem' }}>
            <a href={article.url} target="_blank">
              <strong>{article.title}</strong>
              {article.date && (
                <small style={{ marginLeft: 8 }}>
                  <Timestamp date={article.date} />
                </small>
              )}
              {article.description && (
                <small
                  style={{
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginTop: 4,
                  }}
                >
                  {article.description}
                </small>
              )}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
