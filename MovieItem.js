import React from "react";

export default function MovieItem({ poster, title, id, handleMovieId }) {

  return (
    <div onClick={() => handleMovieId(id)} className="movie-item">
      <img src={poster} alt={poster} />
      <h3 className="title">{title}</h3>
    </div>
  );
}