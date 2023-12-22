// components/ListeArticlesConnexes.tsx
import React from "react";
import { Article } from "../../types/Article";
import ArticlePrincipal from "../ArticlePrincipal/ArticlePrincipal";

interface ListeArticlesConnexesProps {
  articlesConnexes: Article[];
  onShowRelatedArticles: (articleId: string) => void; // Ajout de cette prop
}

const ListeArticlesConnexes: React.FC<ListeArticlesConnexesProps> = ({
  articlesConnexes,
  onShowRelatedArticles, // Utilisation de la prop passée
}) => {
  if (articlesConnexes.length === 0) {
    return <div>Pas d'articles connexes à afficher.</div>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center liste-article-principal-container">
        {articlesConnexes.map((article, index) => (
          <ArticlePrincipal
            key={article.id || index}
            {...article}
            onShowRelatedArticles={onShowRelatedArticles}
          />
        ))}
      </div>
    </>
  );
};

export default ListeArticlesConnexes;
