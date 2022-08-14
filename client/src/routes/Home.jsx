import React from 'react'
import AddMovieForm from '../components/AddMovieForm'
import Header from '../components/Header'
import MovieList from '../components/MovieList'

const Home = () => {
  return (
    <>
      <Header />
      <AddMovieForm />
      <MovieList />
    </>
  )
}

export default Home