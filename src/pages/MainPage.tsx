import React, { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import Search from "../components/Search";
import { FilmData } from "../models/FilmData";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const MainPage = () => {
  const [itemList, setItemList] = useState<FilmData[]>([]);

  useEffect(() => {
    getItems();
  }, []);

  const sendToChild = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    phrase: string
  ): void => {
    event.preventDefault();
    axios({
      method: "get",
      url: "https://at.usermd.net/api/movies",
    })
      .then((response) => {
        const filteredFilms: FilmData[] = response.data.filter(
          (filmData: FilmData) =>
            filmData.title.toLowerCase().includes(phrase.toLowerCase())
        );
        setItemList(filteredFilms);
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

  const getItems = (): void => {
    axios({
      method: "get",
      url: "https://at.usermd.net/api/movies",
    })
      .then((response: AxiosResponse) => {
        setItemList(response.data);
      })
      .catch((error: any) => {
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
    <div className="main-page">
      <div className="main-page__search">
        <div className="main-page__search-title">
          Znajdź film który cię interesuje:
        </div>
        <Search getPhrase={sendToChild} />
      </div>
      <div>Lista filmów</div>
      <div className="main-page__film-cards">
        {itemList.map((item: FilmData) => (
          <FilmCard
            key={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating}
            content={item.content}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
