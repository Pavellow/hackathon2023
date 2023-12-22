// Home.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Article } from "./types/Article";
import ListeArticlePrincipal from "./Components/ListeArticlePrincipal/ListeArticlePrincipal";
import SearchForm from "./Components/SearchForm/SearchForm";
import ListeArticlesConnexes from "./Components/ListeArticlesConnexes/ListeArticlesConnexes";
import "./globals.css";
import logo from "./theiere.png";
import SvgNuage from "./Components/SvgNuage/SvgNuage";

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const handleShowRelatedArticles = async (articleId: string) => {
    try {
      const response = await fetch(
        `api/articles/${parseInt(articleId)}/related`
      );
      const result = await response.json();

      if (!result || !result.article || !result.related) {
        console.log("result", result);
        console.error("La réponse de l'API n'est pas dans le format attendu.");
        return;
      }

      const { article, related } = result;

      setArticles([article]); // Met à jour l'état avec l'article principal
      setRelatedArticles(related); // Met à jour l'état avec les articles connexes
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des articles connexes:",
        error
      );
    }
  };

  const handleSearch = async (category: string) => {
    try {
      const url = `http://127.0.0.1:8080/articles?category=${encodeURIComponent(
        category
      )}&per_page=15&page_index=0`;
      const response = await fetch(url);
      const result = await response.json();
      console.log("result", result.data);
      if (result && result.data) {
        setArticles([result.data]);
        setRelatedArticles(
          result.data.filter((a: { id: any }) => a.id !== null)
        );
      } else {
        setArticles([]);
        setRelatedArticles([]);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      setArticles([]);
      setRelatedArticles([]);
    }
  };

  useEffect(() => {
    const fetchInitialArticles = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8080/articles?per_page=15&page_index=0"
        );
        const json = await response.json();
        if (json && json.data) {
          setArticles(json.data);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
        setArticles([]);
      }
    };

    fetchInitialArticles();
  }, []);

  let articlesToDisplay =
    relatedArticles.length > 0
      ? relatedArticles
      : searchResults.length > 0
      ? searchResults
      : articles;

  return (
    <div className="home-container">
      <h1>Tea News</h1>
      <h2>
        Le meilleur de l'actualiTHÉ
        <img src={"./theiere.png"} alt="Logo" />
      </h2>
      <SearchForm onSearch={handleSearch} />
      {relatedArticles.length > 0 ? (
        <ListeArticlesConnexes
          articlesConnexes={relatedArticles}
          onShowRelatedArticles={handleShowRelatedArticles}
        />
      ) : (
        <ListeArticlePrincipal
          articles={searchResults.length > 0 ? searchResults : articles}
          onShowRelatedArticles={handleShowRelatedArticles}
        />
      )}
      <SvgNuage></SvgNuage>
    </div>
  );
};

export default Home;
