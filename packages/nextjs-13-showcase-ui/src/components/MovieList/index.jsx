"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Movie from "../Movie";
import { genres } from "./constants";

export default function MovieList({ data }) {
  const [filteredData, setFilteredData] = useState([...data]);
  const [actived, setActived] = useState(0);

  useEffect(() => {
    setFilteredData(() => [...data].filter((i) => (actived ? i.genre_ids.includes(actived) : i)));
  }, [actived]);

  return (
    <div>
      <span className="text-xs">Filter:</span>
      <ul className="flex my-2">
        {genres.map((i, index) => {
          return (
            <li
              key={i.id}
              className={index === 0 ? "-ml-1" : "ml-3"}
              onClick={() => {
                setActived(i.id);
              }}
            >
              <GenreButton isActive={i.id === actived}>{i.title}</GenreButton>
            </li>
          );
        })}
      </ul>
      <div className="grid grid-cols-fluid gap-16 my-8">
        {filteredData.length ? (
          <AnimatePresence>
            {filteredData.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </AnimatePresence>
        ) : (
          "No movies found"
        )}
      </div>
    </div>
  );
}

const GenreButton = ({ children, isActive, ...props }) => (
  <button
    {...props}
    className={`${isActive ? "bg-blue-500 text-white" : "bg-transparent text-black"}  hover:bg-blue-500 font-bold py-2 px-4 rounded-full`}
  >
    {children}
  </button>
);
