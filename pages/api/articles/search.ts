// pages/api/search.ts
/* import type { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const searchTerm = req.query.searchTerm as string;

    if (!searchTerm) {
      // Gère le cas où searchTerm est undefined ou vide
      return res
        .status(418)
        .json({ error: "Le terme de recherche est manquant" });
    }

    const keywords = searchTerm.split(" ");

    const query = `SELECT * FROM public.articles WHERE ${keywords
      .map((_, idx) => `short_description LIKE $${idx + 1}`)
      .join(" OR ")}`;
    const values = keywords.map((keyword) => `%${keyword}%`);

    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
 */

// pages/api/articles/[idArticle]/related.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const apiUrl = `http://localhost:8001/api/articles/${id}/related`;
    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erreur lors de la requête à l'API externe:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
