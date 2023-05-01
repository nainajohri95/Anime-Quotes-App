import React from "react";
import {AiOutlineArrowLeft} from 'react-icons/ai'

export default function MovieDetails({ movieData,movieShow,detailShow }) {


    function toggleData(){
        movieShow(true)
        detailShow(false)    
    }

  return (
    <div className="movie-data-container">
        <div className="poster">
            <img
            src={movieData.Poster}
            alt={movieData.Poster}
            />
        </div>
        <div className="movie-details">
            <h1 className="title">
            {movieData.Title} <span style={{ color: "grey" }}>({movieData.Year})</span>
            </h1>
            <h4>Rated: <span style={{ color: "red" }}>{movieData.Rated}</span></h4>
            <h4>Released: <span style={{ color: "red" }}>{movieData.Released}</span></h4>
            <h4>Runtime: <span style={{ color: "red" }}>{movieData.Runtime}</span></h4>
            <h4>Genre: <span style={{ color: "red" }}>{movieData.Genre}</span></h4>
            <h4>Director: <span style={{ color: "red" }}>{movieData.Director}</span></h4>
            <h4>Writer: <span style={{ color: "red" }}>{movieData.Writer}</span></h4>
            <h4>Actors: <span style={{ color: "red" }}>{movieData.Actors}</span></h4>   
            <h4>IMDB: <span style={{ color: "red" }}>{movieData.imdbRating}/10</span></h4>   
            <h4>Box Office: <span style={{ color: "green" }}>{movieData.BoxOffice}</span></h4>   
            <h4 className="plot">{movieData.Plot}</h4>   
            <button onClick={toggleData} className="back-btn"><AiOutlineArrowLeft className="arrow"/> Back</button>
        </div>
    </div>
  );
}