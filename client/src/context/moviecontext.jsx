import React from "react";
import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  return <MovieContext.Provider value={{ movies, setMovies, addMovie, deleteMovie, selectedMovie, setSelectedMovie }}>
    {props.children}
  </MovieContext.Provider>


}