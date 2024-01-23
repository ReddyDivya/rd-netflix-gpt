import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPath } from '../utils/slices/pathSlice';
import { addMovieClicked } from '../utils/slices/moviePageSlice';
import MovieMainContainer from './MovieMainContainer'
import useMovieDetails from '../utils/hooks/useMovieDetails';
import useMovieTrailer from '../utils/hooks/useMovieTrailer';
import MovieSecondaryContainer from './MovieSecondaryContainer';
import Shimmer from './Shimmer';
// import {useMovieTrailer, useMovieDetails} from '../utils/hooks/index';
// import {MovieMainContainer, MovieSecondaryContainer, Shimmer} from './index'

const Movie = () => {
  const {movieId} = useParams();//to fetch the movieId
  const dispatch = useDispatch();

  //adding the clicked movie details to the redux
  useMovieDetails({movieId});
  
  //fetching the movie details for the clicked movie
  const details = useSelector((store) => store?.movieDetails);
  useMovieTrailer({movieId})//fetching movie trailer with the movie id

  const pathname = window.location.pathname.slice(7);
  
  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(addPath(window.location.pathname.slice(0, 6)));//adding path to redux store
    dispatch(addMovieClicked(pathname));//adding clicked movie path to redux store
  }, [movieId]);

  return details.movieDetails === null ? (
    <Shimmer />
  ) : (
    <div className="">
      <MovieMainContainer />
      <MovieSecondaryContainer />
    </div>
  );
}

export default Movie