import React from "react";
import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([])

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  return <MovieContext.Provider value={{ movies, setMovies, addMovie, deleteMovie }}>
    {props.children}
  </MovieContext.Provider>


}