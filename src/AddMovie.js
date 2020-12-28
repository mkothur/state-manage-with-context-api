import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: Math.random().toString(16).slice(2) }
    ]);
  };
  return (
    <form onSubmit={addMovie}>
      Movie Name:
      <input type="text" name="name" value={name} onChange={updateName} />
      <br />
      Movie Price:
      <input type="text" price="price" value={price} onChange={updatePrice} />
      <br /> <br />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
