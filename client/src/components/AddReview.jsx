import React, { useState } from 'react'

const AddReview = () => {

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  return (
    <div className="mb-2" >
      <form>
        <div className="form-row ">
          <div className="form-group col-8 ">
            <label htmlFor='name'>Name</label>
            <input id="name"
              placeholder="name"
              name="name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              type="text"
              className="form-control" />
          </div>
          <div className="form-group col-8 mt-3  ">
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
        <div className="form-group mt-3 col-8">
          <label htmlFor="review">Review</label>
          <textarea className="form-control" id="review" name="review"
            value={review}
            onChange={ev => setReview(ev.target.value)}>
          </textarea>
          <button className="btn btn-primary mt-5  row-15">
            Submit
          </button>
        </div>
      </form>

    </div>
  )
}

export default AddReview