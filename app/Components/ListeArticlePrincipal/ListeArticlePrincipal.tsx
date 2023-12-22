// ListeArticlePrincipal.tsx
import React, { useEffect } from "react";
import ArticlePrincipal from "../ArticlePrincipal/ArticlePrincipal";
import { Article } from "../../types/Article";

import "./ListeArticlePrincipal.css";

interface ListeArticlePrincipalProps {
  articles: Article[];
  onShowRelatedArticles: (articleId: string) => void;
}

const ListeArticlePrincipal: React.FC<ListeArticlePrincipalProps> = ({
  articles,
  onShowRelatedArticles,
}) => {
  if (articles.length === 0) {
    return (
      <div className="search-status">
        <p>Pas de résultat trouvé.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center liste-article-principal-container">
      {articles.map((article) => (
        <ArticlePrincipal
          key={article.id}
          {...article}
          onShowRelatedArticles={onShowRelatedArticles}
        />
      ))}
    </div>
  );
};

export default ListeArticlePrincipal;
