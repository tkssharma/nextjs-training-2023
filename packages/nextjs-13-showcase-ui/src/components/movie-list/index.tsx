"use client";
import { useEffect, useState } from "react";
import Movie from "../Movie";
import { genres } from "./constants";

export default function MovieList({ data }: any) {
  const [filteredData, setFilteredData] = useState([...data]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setFilteredData(() => [...data].filter((i) => (active ? i.genre_ids.includes(active) : i)));
  }, [active]);

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
                setActive(i.id);
              }}
            >
              <GenreButton isActive={i.id === active}>{i.title}</GenreButton>
            </li>
          );
        })}
      </ul>
      <div className="grid grid-cols-fluid gap-16 my-8">
        {filteredData.length ? (
          <div>
            {filteredData.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          "No movies found"
        )}
      </div>
    </div>
  );
}

const GenreButton = ({ children, isActive, ...props }: any) => (
  <button
    {...props}
    className={`${isActive ? "bg-blue-500 text-white" : "bg-transparent "}  hover:bg-blue-500 font-bold py-2 px-4 rounded-full`}
  >
    {children}
  </button>
);
