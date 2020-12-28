import React from "react";
import Nav from "./Nav";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";
import "./styles.css";

export default function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}
