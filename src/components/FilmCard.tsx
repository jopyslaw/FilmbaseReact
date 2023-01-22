import React, { useState } from "react";
import FilmData from "../models/FilmData";
import { Link } from "react-router-dom";

const FilmCard = (props: FilmData) => {
  return (
    <div className="film-card">
      <img alt="zdj filmu" src={props.image}></img>
      <div className="film-card__description">
        <span className="film-card__title">Tytuł: {props.title}</span>
        <div className="film-card__short-description">
          <Link
            to={`details/${props.id}`}
            style={{ textDecoration: "none", color: "gold" }}
          >
            {" "}
            Wyświetl szczegóły filmu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
