import React from "react";
import { Observable, first } from "rxjs";
import data from "../assets/data";
import FilmCard from "../components/FilmCard";
import Search from "../components/Search";
import FilmData from "../models/FilmData";

const MainPage = () => {
  let dataInfo: Observable<FilmData[]> = data;
  let itemsList: FilmData[] = [];

  dataInfo.pipe(first()).subscribe((data) => {
    itemsList = data;
  });

  return (
    <div className="main-page">
      <div className="main-page__search">
        <div className="main-page__search-title">
          Znajdź film który cię interesuje:
        </div>
        <Search />
      </div>
      <div>Lista filmów</div>
      <div className="main-page__film-cards">
        {itemsList.map((item: FilmData, id) => (
          <FilmCard
            key={id}
            img={item.img}
            title={item.title}
            rating={item.rating}
            short_description={item.short_description}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
