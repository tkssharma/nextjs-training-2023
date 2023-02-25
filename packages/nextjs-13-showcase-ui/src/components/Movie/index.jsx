"use client";
import Image from "next/image";
import Link from "next/link";
import { imagePathPrefix } from "@/constants";
import { motion } from "framer-motion";

export default function Movie({ movie }) {
  const { id, title, name, release_date, first_air_date, backdrop_path, vote_average, overview } = movie;
  return (
    <motion.div
    layout
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    >
      <h1>{title || name}</h1>
      <h2>{release_date || first_air_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image src={imagePathPrefix + backdrop_path} width={500} height={500} alt={title || name} priority />
      </Link>
    </motion.div>
  );
}
