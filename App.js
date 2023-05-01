import React, { useState } from "react";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import MovieDetails from "./Components/MovieDetails";
import MovieList from "./Components/MovieList";

export default function App() {
  const [search, setSearch] = useState("");
  const [detailShow, setDetailShow] = useState(false);
  const [movieShow, setMovieShow] = useState(true);
  const [movieData, setMovieData] = useState({});
  const [loadingState, setLoadingState] = useState(false);

  async function showMovieData(id) {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=c457e5da`
    );
    const responseJson = await response.json();
    return responseJson;
  }

  function handleMovieId(movieId) {
    setLoadingState(true)
    const currentMovieData = showMovieData(movieId);
    currentMovieData.then((data) => {
      setMovieData(data)
      setMovieShow(false);
      setDetailShow(true);
      setLoadingState(false)
    });
  }

  function handleSearch(text) {
    setSearch(text);
  }

  return (
    <div>
      <Header handleSearch={handleSearch} movieShow={setMovieShow} detailShow={setDetailShow}/>
      {loadingState ? <Loading/> : null}
      {movieShow && <MovieList handleMovieId={handleMovieId} search={search} />}
      {detailShow ? <MovieDetails movieData={movieData} movieShow={setMovieShow} detailShow={setDetailShow}/> : null}
    </div>
  );
}