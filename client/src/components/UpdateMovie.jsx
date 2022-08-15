import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieFinder from '../apis/MovieFinder';

const UpdateMovie = () => {
  const params = useParams();
  console.log(params.id);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const resp = await MovieFinder.get(`/${params.id}`);
        console.log(resp.data.data.movie);
        setName(resp.data.data.movie.name);
        setGenre(resp.data.data.movie.genre);
        setYear(resp.data.data.movie.year);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovie();

  }, [params])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await MovieFinder.put(`/${params.id}`, {
        name: name,
        year: year,
        genre: genre
      });
      console.log(response);
      navigate("/");

    } catch (error) {
      console.log(error)
    }
  }
  return (

    < form >
      <input type="text"
        className="form-control"
        placeholder='Movie Name'
        value={name}
        onChange={(ev) => { setName(ev.target.value) }} />

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

      <button type="submit" onClick={handleSubmit}>Update</button>
    </form >
  )
}

export default UpdateMovie