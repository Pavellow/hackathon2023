import React, { useState } from "react";

import "./SearchForm.css";

interface SearchFormProps {
  onSearch: (category: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(category); // Appelle onSearch avec la catégorie sélectionnée
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value); // Met à jour l'état avec la nouvelle catégorie sélectionnée
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <select
          className="search-form__select"
          id="categorySelect"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Catégorie</option>
          <option value="ENTERTAINMENT">ENTERTAINMENT</option>
          <option value="MEDIA">MEDIA</option>
          <option value="U.S. NEWS">U.S. NEWS</option>
          <option value="BLACK VOICES">BLACK VOICES</option>
          <option value="STYLE & BEAUTY">STYLE & BEAUTY</option>
          <option value="PARENTING">PARENTING</option>
          <option value="CRIME">CRIME</option>
          <option value="WOMEN">WOMEN</option>
          <option value="EDUCATION">EDUCATION</option>
          <option value="BUSINESS">BUSINESS</option>
          <option value="QUEER VOICES">QUEER VOICES</option>
          <option value="ENVIRONMENT">ENVIRONMENT</option>
          <option value="COMEDY">COMEDY</option>
          <option value="WEIRD NEWS">WEIRD NEWS</option>
          <option value="CULTURE & ARTS">CULTURE & ARTS</option>
          <option value="SCIENCE">SCIENCE</option>
          <option value="WELLNESS">WELLNESS</option>
          <option value="POLITICS">POLITICS</option>
          <option value="WORLD NEWS">WORLD NEWS</option>
          <option value="HOME & LIVING">HOME & LIVING</option>
          <option value="FOOD & DRINK">FOOD & DRINK</option>
          <option value="TECH">TECH</option>
          <option value="SPORTS">SPORTS</option>
        </select>
        <button className="search-form__button" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
