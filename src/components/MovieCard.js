import React, { useState } from 'react';
import {IMG_CDN_URL} from "../utils/constants";
import CircularRatingBar from './CircularRatingBar';
import MovieHoverCard from './MovieHoverCard';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavouriteMovie } from '../utils/movieSlice';

const MovieCard = ({title, movieId, date, rating, vote, posterPath, genre}) => {
  const [isHovered, setIsHovered] = useState(false);//hover on movie card
  
  // const path = useSelector((store) => store.path.path);//fetching path
  const dispatch = useDispatch();

  const removeFavourite = () => {
    dispatch(removeFavouriteMovie(movieId));
  }

  if(!posterPath) return null;

  return (
      <div className={`transition hover:-translate-y-1 relative w-36 md:w-48 pr-4 hover:z-10 ${isHovered ? 'visible'  : ''}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
          {/*movie card*/}
          <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>

          {/* rating */}
          <div className="relative bottom-4 md:left-16 md:bottom-8 w-8 md:w-14 bg-gray-900 rounded-full z-20">
            <CircularRatingBar rating={rating}/>
          </div>
          
          {/* hover */}
          {isHovered && <MovieHoverCard 
          title={title}
          posterPath={posterPath}
          vote={vote}
          />}
      </div>
    )
}

export default MovieCard