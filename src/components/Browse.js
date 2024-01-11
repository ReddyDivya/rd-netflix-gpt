import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies';
import useUpComingMovies from '../utils/hooks/useUpComingMovies';
import { useDispatch, useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Footer from './Footer';
import { addPath } from '../utils/pathSlice';
import { toggleGptSearchView } from '../utils/gptSlice';

const Browse = () => {
  
  const user = useSelector((store) => store.user);//fetching user info
  const showGptSearch  = useSelector((store) => store.gpt.showGptSearch );//fetching gpt search info

  useNowPlayingMovies();//now playing movies
  usePopularMovies();//popular movies
  useTopRatedMovies();//top-rated movies
  useUpComingMovies();//upComing movies

  const dispatch = useDispatch();
  const pathname = window.location.pathname;

  useEffect(() => {
    dispatch(toggleGptSearchView());//toggle 'GPT search' & 'Home'
    dispatch(addPath(pathname));//inserting path to slice of redux
  }, [])

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