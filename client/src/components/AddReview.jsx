import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import MovieFinder from '../apis/MovieFinder';

const AddReview = () => {

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await MovieFinder.post(`/${id}/reviews`, {
        name,
        review,
        rating,
      });
      console.log("add reviews", result.rows);
      window.location.reload();
    } catch (err) {
      console.log((err));
    }
  }


  return (
    <div className="mb-2" >
      <form>
        <div className="form-row ">
          <div className="form-group col-4 ">
            <label htmlFor='name'>Name</label>
            <input id="name"
              placeholder="name"
              name="name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              type="text"
              className="form-control" />

            <div className="form-group col-2 mt-3  ">
              <label htmlFor='rating'>Rating</label>
              <select id='rating' className="form-select"
                value={rating}
                onChange={ev => setRating(ev.target.value)}>
                <option disabled>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group mt-3 col-8">
          <label htmlFor="review">Review</label>
          <textarea className="form-control" id="review" name="review"
            value={review}
            onChange={ev => setReview(ev.target.value)}>
          </textarea>
          <button className="btn btn-primary mt-5  row-15" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>

    </div>
  )
}

export default AddReview