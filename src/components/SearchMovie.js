import React from "react";

const SearchMovie = props => {
  function handleChange(event) {
    const newValue = event.target.value;
    props.setsearchValues(newValue);
  }

  return (
    <div className="col col-sm-4">
      <input
        class="form-control me-2"
        placeholder="Type to Search..."
        value={props.value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchMovie;
