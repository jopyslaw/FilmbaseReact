import React from 'react'
import FilmData from '../models/FilmData'

const FilmCard = (props: FilmData) => {
  return (
    <div className='film-card'>
        <img alt='zdj filmu' src={props.img}></img>
        <div className='film-card__description'>
            <span className='film-card__title'>
                {props.title}
            </span>
            <div className='film-card__rating'>
                {props.rating} / 10
            </div>
            <span className='film-card__short-description'>
                {props.short_description}
            </span>
        </div>
    </div>
  )
}

export default FilmCard