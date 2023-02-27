import MovieList from "../components/movie-list";

 const prefixUrl = `https://api.themoviedb.org/3`;

const endPoints = {
  popular: "/movie/popular",
  topRated: "/movie/top_rated",
  trendingAllWeek: "/trending/all/week",
};

const endPoint = `${prefixUrl + endPoints.popular}?api_key=${process.env.MOVIE_DB_API_KEY}&limit=50`;

export default async function Home() {
  console.log(endPoint);
  const res = await fetch(endPoint,{ next: { revalidate: 3000 } });
  if (res.ok) {
    const data = (await res.json()).results;
    console.log(data);
    return (
      <MovieList data={data} />
    );
  } else {
    return JSON.stringify(res.json());
  }
}
