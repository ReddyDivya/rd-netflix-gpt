import React from 'react';
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  
  //now playing movies
  useNowPlayingMovies();

  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse;