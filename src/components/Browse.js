import React from 'react';
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies';
import useUpComingMovies from '../utils/hooks/useUpComingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Footer from './Footer';

const Browse = () => {
  
  const showGptSearch  = useSelector((store) => store.gpt.showGptSearch );

  useNowPlayingMovies();//now playing movies
  usePopularMovies();//popular movies
  useTopRatedMovies();//top-rated movies
  useUpComingMovies();//upComing movies

  return (
    <div>
        <Header/>
        {
          showGptSearch ? (
            <>
              <GptSearch/>
            </>
           )
          :
          (
            <>
              <MainContainer/>
              <SecondaryContainer/>
            </>
          )
        }
        <Footer/>
    </div>
  )
}

export default Browse;