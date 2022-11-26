import React, { useState } from 'react'
import { Observable } from 'rxjs';
import data from '../assets/data'
import FilmCard from '../components/FilmCard';
import FilmData from '../models/FilmData';

const MainPage = () => {
  let dataInfo: Observable<FilmData[]> = data;
  let itemsList: FilmData[] = [];


  dataInfo.subscribe(data => {
    itemsList = data;
  })


  return (
    <div className="main-page">
      {
        itemsList.map((item: FilmData, id) => <FilmCard key={id} img={item.img} title={item.title} rating={item.rating} short_description={item.short_description}/>
      )}
    </div>
  )
}

export default MainPage