import React from "react";

const Search = () => {
  return (
    <div className="search">
      <form className="search__form">
        <div className="search__container">
          <input
            type="text"
            className="search__input-field"
            placeholder="Wpisz frazę do wyszukania ..."
          />
          <button className="search__button">Szukaj</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
