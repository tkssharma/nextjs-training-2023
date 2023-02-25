import MovieList from "@/components/MovieList";
import { API_KEY, prefixUrl } from "./layout";

const endPoints = {
  popular: "/movie/popular",
  topRated: "/movie/top_rated",
  trendingAllWeek: "/trending/all/week",
};

const endPoint = `${prefixUrl + endPoints.popular}?api_key=${API_KEY}&limit=50`;

export default async function Home() {
  const res = await fetch(endPoint,{ next: { revalidate: 3000 } });
  if (res.ok) {
    const data = (await res.json()).results;
    return (
      <MovieList data={data} />
    );
  } else {
    return JSON.stringify(res.json());
  }
}
