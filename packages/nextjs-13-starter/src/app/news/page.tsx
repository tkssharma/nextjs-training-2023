export default async function Page(){

  const {articles } = 
  await fetch('https://api.lil.software/news', {next: { revalidate: 15 }})
  .then((res) => res.json());
  return (<h1>Hello news</h1>)
}