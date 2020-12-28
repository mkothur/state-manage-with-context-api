import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <nav>
      <h3>MK Mudumal</h3>
      <p>List of Movies: {movies.length}</p>
    </nav>
  );
};
export default Nav;
