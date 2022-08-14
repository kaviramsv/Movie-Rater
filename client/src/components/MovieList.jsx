import React, { useContext, useEffect } from 'react'
import MovieFinder from '../apis/MovieFinder'
import { MovieContext } from '../context/moviecontext'
import { Link, useNavigate } from 'react-router-dom'
const MovieList = () => {
  const { movies, setMovies, deleteMovie } = useContext(MovieContext);
  const navigate = useNavigate();
  useEffect(() => {

    const fetchMovieList = async () => {

      try {
        const results = await MovieFinder.get("/");;
        setMovies(results.data.data.movies);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchMovieList();

  }, [])


  const handleDelete = async (id) => {
    try {
      const response = await MovieFinder.delete(`${id}`);
      console.log(response.data.movie.id)
      deleteMovie(id);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  }
  return (
    <div className='list-group m-5 w-60'>
      <table className="table table-hover table-light table-striped">
        <thead className="p-4">
          <tr className='table-light '>
            <th scope="col"><h5 className="text-primary"  >Name</h5></th>
            <th scope="col"><h5 className="text-primary"  >Year</h5></th>
            <th scope="col"><h5 className="text-primary" >Genre</h5></th>
            <th scope="col"><h5 className="text-primary" >Rating</h5></th>
            <th scope="col"><h5 className="text-primary" >Update</h5></th>
            <th scope="col"><h5 className="text-primary" >Delete</h5></th>
          </tr>
        </thead>
        <tbody>
          {movies && movies.map(movie => {
            return (
              <tr key={movie.id}>
                <td><Link to={`/detail/${movie.id}`}>{movie.name}</Link></td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>***</td>
                <td><button className="btn btn-warning" onClick={() => handleUpdate(movie.id)}>Update</button></td>
                <td><button className="btn btn-outline-danger" onClick={() => handleDelete(movie.id)}>Delete</button></td>
              </tr>
            )
          }
          )}
        </tbody>

      </table>
    </div>
  )
}

export default MovieList