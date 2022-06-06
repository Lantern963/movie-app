import React from "react";

const WatchL = props => {
  const WatchRemove = props.removemovie;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="xx image-container col-lg-2 d-flex justify-content-start m-3">
          <img src={movie.Poster} alt={movie.Title}></img>
          <div
            onClick={() => {
              props.deleteitem(index);
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
