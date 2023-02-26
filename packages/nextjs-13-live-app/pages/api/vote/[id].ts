import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawId = req.query.id as string;
  const id = parseInt(rawId);

  await db.vote.create({ data: { voteId: id } });

  res.status(200).json({ PokemonId: id });
}
