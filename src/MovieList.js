import React, { useState, useContext } from "react";
import Movie from "./Movie";
import FilterExample from "./FilterExample";
import { MovieContext } from "./MovieContext";
import TodoApp from "./TodoApp";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
      <FilterExample />
      <TodoApp />
    </div>
  );
};
export default MovieList;
