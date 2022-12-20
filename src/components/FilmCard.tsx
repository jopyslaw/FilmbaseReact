import React from "react";
import FilmData from "../models/FilmData";

const FilmCard = (props: FilmData) => {
  return (
    <div className="film-card">
      <img alt="zdj filmu" src={props.img}></img>
      <div className="film-card__description">
        <span className="film-card__title">Tytuł: {props.title}</span>
        <div className="film-card__rating">Ocena: {props.rating} / 10</div>
        <div className="film-card__short-description">
          Krótki opis: {props.short_description}
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
