import './App.css';
import  { API_PAGE1, API_SEARCH } from './API';
import { useContext, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import { useHistory } from 'react-router';
import MyContext from './context/Context';

function App() {
  const {movies, setMovies} = useContext(MyContext);
  const {search, setSearch} = useContext(MyContext);
  const {setMovieInfo} = useContext(MyContext);

  let history = useHistory();

  useEffect(() => {
    fetch(API_PAGE1)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
  }, [setMovies])

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
    setMovieInfo(filteredMovie);
    history.push('/details');
  }

  return (
    <div>
      <div className="header-home">
        <h1>Movies API 2.0</h1>
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
