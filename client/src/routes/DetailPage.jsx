

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Rating from "../components/Rating";
import { MovieContext } from "../context/moviecontext";
import MovieFinder from "../apis/MovieFinder";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";
import Header from "../components/Header";

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MovieFinder.get(`/${id}`);
        console.log("movie detail", response.data.data);

        setSelectedMovie(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, setSelectedMovie]);
  return (<div>
    {selectedMovie && (
      <>
        <Header heading={selectedMovie.movie.name} />
        <div className="text-center">
          <Rating rating={selectedMovie.movie.average_rating} />
        </div>
        <AddReview />
        <div className="mt-3">
          <Reviews reviews={selectedMovie.review} />
        </div>
      </>
    )}

  </div>);
};
export default DetailPage