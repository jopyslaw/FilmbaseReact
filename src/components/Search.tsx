import React, { useState } from "react";

const Search = (props: {
  getPhrase: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    phrase: string
  ) => void;
}) => {
  const [phrase, setPhrase] = useState<string>("");

  return (
    <div className="search">
      <form className="search__form">
        <div className="search__container">
          <input
            type="text"
            className="search__input-field"
            placeholder="Wpisz frazę do wyszukania ..."
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          <button
            className="search__button"
            onClick={(event) => props.getPhrase(event, phrase)}
          >
            Szukaj
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
