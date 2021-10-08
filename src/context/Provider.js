
import React, { useState } from 'react';
import MyContext from './Context';

function Provider({ children }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [movieInfo, setMovieInfo] = useState([]);
  
  const contextValue = {
    movies,
    setMovies,
    search,
    setSearch,
    movieInfo,
    setMovieInfo
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
