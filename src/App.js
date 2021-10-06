import './App.css';
import  { API_PAGE1, API_SEARCH } from './API';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import { useHistory } from 'react-router';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  let history = useHistory();

  useEffect(() => {
    getMovies(API_PAGE1);
  }, [])

  const getMovies = () => {
    fetch(API_PAGE1)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      fetch(API_SEARCH+search)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        })

      setSearch('');
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleDetails = (e) => {
    const filteredMovie = movies.filter((movie) => movie.id === e);
    localStorage.setItem('movieDetails', JSON.stringify(filteredMovie[0]));
    history.push('/details');
  }

  return (
    <div>
      <div className="header-home">
        <h1>Movies API</h1>
      </div>
      <div className="sub-header-home">
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Buscar..."
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="movie-container">
        {movies.length > 0 && movies.map(
          (movie) => 
            <span onClick={() => handleDetails(movie.id)} className="card-span" key={movie.id}>
              <MovieCard key={movie.id} {...movie} />
            </span>
        )}
      </div>
    </div>
  );
}

export default App;
