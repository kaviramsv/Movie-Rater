import React, { useContext, useState } from 'react'
import MovieFinder from '../apis/MovieFinder';
import { MovieContext } from '../context/moviecontext';

const AddMovieForm = () => {

  const [name, setName] = useState("");
  const [year, setYear] = useState("Year");
  const [genre, setGenre] = useState("Genre");

  const { addMovie } = useContext(MovieContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await MovieFinder.post("/", {
        name: name,
        year: year,
        genre: genre
      });

      console.log("respose from backend", response.data.result);
      addMovie(response.data.result);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="list-group m-5 w-60 align-items-center">
      <form className="row row-cols-lg align-items-center">
        <div className="row">
          <div className="col-3 ">
            <input type="text"
              className="form-control"
              placeholder='Movie Name'
              value={name}
              onChange={(ev) => { setName(ev.target.value) }} />
          </div>
          <div className="col-3 ">

            <select className="form-select"
              value={year}
              onChange={(ev) => { setYear(ev.target.value) }}>
              <option disabled>Year</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
            </select>
          </div>
          <div className="col-3">
            <select className="form-select"
              value={genre}
              onChange={(ev) => { setGenre(ev.target.value) }}>
              <option disabled>Genre</option>
              <option value="Fiction">Fiction</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div className="col-3">

            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add New Movie</button>
          </div>


        </div>
      </form>
    </div>
  )
}

export default AddMovieForm