import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useParams } from "react-router-dom";
import { FilmData } from "../models/FilmData";

const FilmCardContent = () => {
  const [film, setFilm] = useState<FilmData>();
  const { id } = useParams();
  const token: string | null = localStorage.getItem("token");
  const isLogged: any = decodeToken(token || ""); //TODO:
  const isAdmin: string = isLogged.role;

  const handleDelete = () => {
    axios({
      method: "delete",
      url: `https://at.usermd.net/api/movie/${id}`,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

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
