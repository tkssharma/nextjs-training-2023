import 'charts.css/dist/charts.min.css';

export default async function Page() {
  const { forecast } = await fetch(
    'https://api.lil.software/weather?latitude=40.7362621&longitude=-73.9911719',
    {
      next: { revalidate: 15 },
    }
  ).then((res) => res.json());
  const temperatures = forecast.map((row) => row.temperature);
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  return (
    <main>
      <p style={{ color: 'var(--text-muted)', float: 'right' }}>New York, NY</p>
      <h1>Weather</h1>

      <table
        className="charts-css line show-labels"
        aria-hidden
        style={{ height: 128, marginBlock: 32 }}
      >
        <caption>Temperature This Week</caption>
        <tbody>
          {forecast.map((row, i) => (
            <tr key={row.name}>
              <th scope="row">
                {i === 0
                  ? 'Now'
                  : row.name.includes('ight')
                  ? ''
                  : row.name.slice(0, 3)}
              </th>
              <td
                style={{
                  '--start':
                    i === 0
                      ? (row.temperature - minTemp) / (maxTemp - minTemp)
                      : (forecast[i - 1].temperature - minTemp) /
                        (maxTemp - minTemp),
                  '--size': (row.temperature - minTemp) / (maxTemp - minTemp),
                  '--color': row.description.includes('Rain')
                    ? 'var(--links)'
                    : row.description.includes('Cloudy')
                    ? 'var(--text-muted)'
                    : 'var(--sunny)',
                }}
              >
                <span className="data">{row.temperature}º</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`
        .charts-css.line:not(.reverse):not(.reverse-data) tbody tr td .data {
          transform: translateX(55%) translateY(-85%);
        }
      `}</style>

      <table>
        <tbody>
          {forecast.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td colspan={2}>{row.description}</td>
              <td style={{ textAlign: 'right' }}>
                {row.temperature}º{row.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
