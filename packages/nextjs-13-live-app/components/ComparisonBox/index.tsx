import { db } from "../../lib/db";
import { getRandomIds } from "../../lib/get-random-ids";
import VoteBox from "../VoteBox";
import VoteContextProvider from "../../context/VoteContext";

import styles from "./styles.module.css";

async function getPokemon() {
  const { firstId, secondId } = getRandomIds();

  const firstPokemon = await db.pokemon.findFirst({ where: { id: firstId } });
  const secondPokemon = await db.pokemon.findFirst({ where: { id: secondId } });

  return { firstPokemon, secondPokemon };
}

export default async function ComparisonBox() {
  const { firstPokemon, secondPokemon } = await getPokemon();
  if (!firstPokemon || !secondPokemon) return null;

  return (
    <div className={styles.ComparisonContainer}>
      <VoteContextProvider>
        <VoteBox pokemon={firstPokemon} />
        <span>OR</span>
        <VoteBox pokemon={secondPokemon} />
      </VoteContextProvider>
    </div>
  );
}
