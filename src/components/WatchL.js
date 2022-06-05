import React from "react";
import WatchRemove from "./WatchRemove";

const WatchL = props => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt={movie.Title}></img>
          <div
            onClick={() => {
              return props.deleteitem(index);
            }}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <WatchRemove />
          </div>
        </div>
      ))}
    </>
  );
};

export default WatchL;
