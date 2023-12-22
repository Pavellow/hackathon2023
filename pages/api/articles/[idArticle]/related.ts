// pages/api/articles/[idArticle]/related.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { idArticle } = req.query;

  try {
    const apiUrl = `http://127.0.0.1:8080/articles/${idArticle}/related`;
    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erreur lors de la requête à l'API externe:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
