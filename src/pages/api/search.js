// src/pages/api/search.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Only GET requests are allowed' });
  }

  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: 'Query parameter is missing' });
  }

  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db(process.env.MONGODB_DB);
    const items = database.collection('items');

    const results = await items.find({ itemName: new RegExp(q, 'i') }).toArray();

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  } finally {
    await client.close();
  }
}
