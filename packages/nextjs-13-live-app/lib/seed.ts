import { db } from './db';
import axios from 'axios';
/**
 * Generations Count
 * I    - 151
 * II   - 251
 * III  - 386
 * IV   - 493
 * V    - 649
 * VI   - 721
 * VII  - 809
 * VIII - 905
 * IX   - 1009
 */

// 1/4 of the first gen for dev testing
const POKEMON_COUNT = 37;

async function Seed() {
  const res = await axios.get(
    'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon.csv'
  );

  const text = res.data.split('\n');

  // slice the first row to avoid header text
  const formattedPokemon = text.slice(1, POKEMON_COUNT + 1).map((data) => {
    const row = data.split(',');
    const id = parseInt(row[0]);
    const name = row[1];
    return {
      id,
      name,
      spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  const creation = await db.pokemon.createMany({
    data: formattedPokemon,
  });

  console.log('Creation ?', creation.count);
}

Seed();
