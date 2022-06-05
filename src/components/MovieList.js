import React from "react";

const MovieList = props => {
  const Watchlist = props.addWatchlist;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3 xy">
          <img src={movie.Poster} alt={movie.Title}></img>
          <div
            onClick={() => {
              props.addtowatchlist(movie);
            }}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <Watchlist />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
