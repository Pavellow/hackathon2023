// ArticlePrincipal.tsx
import React from "react";
import { Article } from "../../types/Article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faGlobe,
  faHeader,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./ArticlePrincipal.css";

interface ArticlePrincipalProps extends Article {
  onShowRelatedArticles: (articleId: string) => void;
}

const ArticlePrincipal: React.FC<ArticlePrincipalProps> = (props) => {
  return (
    <div className="article-principal">
      <div className="article-principal__title">
        <h3>{props.title}</h3>
      </div>
      <div className="article-principal__description">
        <p>
          <FontAwesomeIcon icon={faHeader} /> {props.short_description}
        </p>
      </div>
      <div className="article-principal__date">
        <p>
          <FontAwesomeIcon icon={faCalendar} /> {props.date}
        </p>
      </div>
      <div className="article-principal__author">
        <p>
          <FontAwesomeIcon icon={faUser} /> {props.authors}
        </p>
      </div>
      <div className="article-principal__category">
        <p>
          <FontAwesomeIcon icon={faList} /> {props.category}
        </p>
      </div>
      <div className="article-principal__container-buttons">
        <div className="article-principal__link">
          <a href={props.link}>
            <FontAwesomeIcon icon={faGlobe} /> Lire plus
          </a>
        </div>
        <div className="article-principal__connexe">
          <button onClick={() => props.onShowRelatedArticles(props.id)}>
            Voir les articles connexes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePrincipal;
