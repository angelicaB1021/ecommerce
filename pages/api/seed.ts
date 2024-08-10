import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../models';
import { seedDatabase } from '../../database';
import { db } from '../../database';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ name: 'No tienes acceso a esta API' });
  }

  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  res.status(200).json({ name: 'Proceso realizado correctamente' });
}