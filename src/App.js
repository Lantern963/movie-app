import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieHeading from "./components/MovieHeading";
import SearchMovie from "./components/SearchMovie";
import WatchList from "./components/WatchList";
import WatchL from "./components/WatchL";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValues, setsearchValues] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [x, setX] = useState(false);

  const getMovieRequest = async searchValues => {
    const url = `http://www.omdbapi.com/?s=${searchValues}&apikey=7713b60e`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValues);
  }, [searchValues]);

  const addWL = movie => {
    setX(true);
    const addmovie = [...watchlist, movie];
    setWatchlist(addmovie);
  };

  const deletemovie = id => {
    setWatchlist(prevMovie => {
      return prevMovie.filter((movie, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-item-center mt-4 mb-4">
          <MovieHeading heading="Movies" />
          <SearchMovie
            searchValues={searchValues}
            setsearchValues={setsearchValues}
          />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            addWatchlist={WatchList}
            addtowatchlist={addWL}
          />
        </div>
        <div style={x ? null : { display: "none" }}>
          <div className="row d-flex align-item-center mt-4 mb-4">
            <MovieHeading heading="Watchlist" />
          </div>
          <div className="row">
            <WatchL movies={watchlist} deleteitem={deletemovie} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
