import { imagePathPrefix } from "../../../constants";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params: { movieId } }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_DB_API_KEY}`);
  const data = await res.json();
  return (
    <div>
      <Link href={"/"} className="text-lg underline">Home.</Link>
      <div className="my-4">
        <h2 className="text-4xl">{data.title}</h2>
        <h1 className="text-lg ">{data.release_date}</h1>
        <h2>Runtime: {data.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block my-2 py-1 px-2 rounded-lg text-sm">{data.status}</h2>
        <Image className="my-12 w-full" src={imagePathPrefix + data.backdrop_path} alt={data.title} width={1000} height={1000} priority />
      </div>
      <div className="my-4">
        <p className="text-lg">{data.overview}</p>
      </div>
    </div>
  );
}
