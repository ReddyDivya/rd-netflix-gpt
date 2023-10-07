import React from 'react';
import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
  
  if(!posterPath) return null;

  return (
    <div className="w-32 md:w-32 pr-4 hover:w-[140px]">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard