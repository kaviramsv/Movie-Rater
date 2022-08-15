import React from 'react'
import Rating from './Rating'

const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="row row-cols-3 mb-2" >
      {reviews.map(review => {
        return (
          <div key={review.id} className="card text-bg-warning m-3 mt-5" style={{ maxWidth: "30%" }}>
            <div className="card-header"><Rating rating={review.rating} /></div>
            <div className="card-body">
              <h5 className="card-title">{review.name}</h5>
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
};
// {  reviews.map(movie => {
//     return (
// <div className="row row-cols-3 mb-2">
// <div className="card text-bg-warning m-3 mt-5" style={{ maxWidth: "30%" }}>
//   <div className="card-header"><Rating rating={3} /></div>
//   <div className="card-body">
//     <h5 className="card-title">Nmae</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>




export default Reviews;