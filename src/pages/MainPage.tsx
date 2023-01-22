import React, { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import Search from "../components/Search";
import FilmData from "../models/FilmData";
import axios from "axios";

const MainPage = () => {
  //let dataInfo!: Observable<FilmData[]>;
  const [itemList, setItemList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    getItems();
    /*const sub = dataInfo.subscribe((data) => {
      itemsList = data;
    });*/
    //return sub.unsubscribe();
  }, []);

  const sendToChild = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    phrase: string
  ): void => {
    setSearchPhrase(phrase);
  };

  const getItems = () => {
    axios({
      method: "get",
      url: "https://at.usermd.net/api/movies",
    })
      .then((response) => {
        setItemList(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
        {itemList.map((item: FilmData, id) => (
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
