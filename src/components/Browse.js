import React from 'react';
import Header from './Header';
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  
  //now playing movies
  useNowPlayingMovies();

  return (
    <div>
        <Header/>
    </div>
  )
}

export default Browse;