"use client";
import Image from "next/image";
import Link from "next/link";
import { imagePathPrefix } from "../../constants";

export default function Movie({ movie }: any) {
  const { id, title, name, release_date, first_air_date, backdrop_path, vote_average, overview } = movie;
  return (
    <div>
      <h1>{title || name}</h1>
      <h2>{release_date || first_air_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image src={imagePathPrefix + backdrop_path} width={500} height={500} alt={title || name} priority />
      </Link>
    </div>
  );
}
