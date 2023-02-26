import { db } from "../../lib/db";
import Image from "next/image";
import styles from "./styles.module.css";

// ISR
export const revalidate = 60;

async function getPokemonVotes() {
  return await db.pokemon.findMany({
    orderBy: {
      votes: { _count: "desc" },
    },
    select: {
      id: true,
      name: true,
      spriteUrl: true,
      _count: {
        select: {
          votes: true,
        },
      },
    },
  });
}

export default async function Results() {
  const res = await getPokemonVotes();
  // const totalVotes = res.reduce((acc, curr) => acc + curr._count.votes, 0);
  // console.log("Total votes ", totalVotes);

  return (
    <main className={styles.container}>
      <table className={styles.table}>
        <tbody>
          {res.map((pokemon) => (
            <tr key={pokemon.id}>
              <td className={styles.rowImage}>
                <Image
                  src={pokemon?.spriteUrl}
                  alt={pokemon.name}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  priority
                />
              </td>
              <td className={styles.rowName}>{pokemon.name}</td>
              <td className={styles.rowRank}>{pokemon._count.votes} &uarr;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
