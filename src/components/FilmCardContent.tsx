import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmData from "../models/FilmData";

const FilmCardContent = () => {
  const [film, setFilm] = useState<FilmData>();
  const { id } = useParams();

  useEffect(() => {
    getFilmData();
  }, []);

  const getFilmData = () => {
    axios({
      method: "get",
      url: `https://at.usermd.net/api/movies/${id}`,
    })
      .then((response) => {
        setFilm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="film-card">
      <img alt="zdj filmu" src={film!.image}></img>
      <div className="film-card__description">
        <span className="film-card__title">Tytuł: {film!.title}</span>
        <div className="film-card__short-description">{film!.content}</div>
      </div>
    </div>
  );
};

export default FilmCardContent;
