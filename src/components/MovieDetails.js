import '../App.css';
import  { API_IMG, API_GENRES } from '../API';
import { useHistory } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import MyContext from '../context/Context';
import { useContext } from 'react';
import axios from 'axios';

export default function MovieDetails() {
  let history = useHistory();

  const { movieInfo } = useContext(MyContext);
  const {genres, setGenres} = useContext(MyContext);
  const { title, poster_path, overview, vote_average, release_date, genre_ids } = movieInfo[0] || movieInfo;

  const moveToHome = () => {
    history.push('/');
  }

  useEffect(() => {
    axios.get(API_GENRES).then((res) => setGenres(res.data.genres));
  });


  if (movieInfo.length > 0) {
    return (
      <>
        <div className="header">
          <h1>Movie Details</h1>
        </div>
        <div className="sub-header">
          <button onClick={moveToHome} className="btn-home">HOME</button>
        </div>
        <div className="details-container">
  
          <div className="sub-container">
            <div className="main-card">
  
              <div className="card-left">
                <div className="card-details">
                  <div className="text-block">
                    <h2>{title}</h2>
                    <div className="card-cat">
                      <span className="PG">{vote_average}</span>
                      <span className="year">{release_date.substr(0, 4)}</span>
                      <span className="genre">
                        <span>{genres.filter(e => e.id === genre_ids[0]).map(e => e.name)} |</span>
                        <span> {genres.filter(e => e.id === genre_ids[1]).map(e => e.name)}</span>
                      </span>
                    </div>
                    <p className="disc">{overview.substr(0, 470)}</p>
                  </div>
                </div>
              </div>
  
              <div className="card-right">
                <div className="img-container">
                  <img src={API_IMG+poster_path} alt={title} />
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
      <div className="header">
        <h1>No Movie Details</h1>
      </div>
      </>
    )
  }
}
