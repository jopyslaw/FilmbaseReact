import axios from "axios";
import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FilmData } from "../models/FilmData";

const FilmDetailsPage = () => {
  const [film, setFilm] = useState<FilmData>();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const isLogged: any = decodeToken(token || "");
  const isAdmin = isLogged?.role;

  const handleDelete = () => {
    axios({
      method: "delete",
      url: `https://at.usermd.net/api/movie/${id}`,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) =>
        toast.error(error.response.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "Error1",
        })
      );
  };

  useEffect(() => {
    console.log("work");
    getFilmData();
  }, []);

  const getFilmData = () => {
    console.log(id);
    axios({
      method: "get",
      url: `https://at.usermd.net/api/movies/${id}`,
    })
      .then((response) => {
        setFilm(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: "Error1",
        });
      });
  };

  return (
    <div className="film-details-page">
      <div className="film-card">
        <img alt="zdj filmu" src={film?.image}></img>
        <div className="film-card__description">
          <span className="film-card__title">Tytuł: {film?.title}</span>
          <div className="film-card__short-description">{film?.content}</div>
          {isAdmin === "admin" && (
            <button className="film-card__delete-btn" onClick={handleDelete}>
              Delete Film
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmDetailsPage;
