import React from 'react'
import '../App.css';
import { API_IMG } from '../API';

export default function MovieCard(props) {
  const { title, poster_path, vote_agerage } = props;

  return (
    <div className="movie">
      <img src={API_IMG+poster_path} alt={title} className="img-cards" />
      <div className="movie-info">
        <h5>{title}</h5>
        <span>{vote_agerage}</span>
      </div>
    </div>
  )
}
