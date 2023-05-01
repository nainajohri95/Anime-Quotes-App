import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { nanoid } from "nanoid";
import Loading from "./Loading";

export default function MovieList({ search, handleMovieId }) {
  const [movies, setMovies] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  async function fetchMovies(search) {
    setLoadingState(true);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=c457e5da`
    );
    const responseJson = await response.json();
    setMovies(responseJson.Search);
    setLoadingState(false);
  }

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <>
      {loadingState ? <Loading /> : null}
      <div className="movie-list">
        {movies ?
          movies.map((movie) => {
            return (
              <MovieItem
                handleMovieId={handleMovieId}
                key={nanoid()}
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
              />
            );
          }): 'Search Any Movie'}
      </div>
    </>
  );
}