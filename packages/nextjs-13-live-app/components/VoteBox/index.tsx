"use client";

import { Pokemon } from "@prisma/client";
import { useContext } from "react";
import { VoteContext } from "../../context/VoteContext";
import Image from "next/image";

import styles from "./styles.module.css";

export default function VoteBox({ pokemon }: { pokemon: Pokemon }) {
  const { handleVote, isLoading } = useContext(VoteContext);

  return (
    <div className={styles.VoteContainer}>
      <p>{pokemon.name}</p>
      <div className={styles.ImageContainer}>
        <Image
          src={pokemon?.spriteUrl}
          alt={pokemon?.name}
          width={256}
          height={256}
        />
      </div>
      <button
        className={styles.MyButton}
        disabled={isLoading}
        onClick={() => handleVote(pokemon.id)}
      >
        {isLoading ? "Loading" : "Vote for me"}
      </button>
    </div>
  );
}
