import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/slices/gptSlice';
import { addPath } from '../utils/slices/pathSlice';
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies';
import useUpComingMovies from '../utils/hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import Footer from './Footer';
// import { Header, Footer, GptSearch, MainContainer, SecondaryContainer } from "./index";
// import {usePopularMovies, useNowPlayingMovies, useTopRatedMovies, useUpComingMovies} from "../utils/hooks/index";

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
    </div>
  )
}

export default Browse;