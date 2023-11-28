import React from 'react';
import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
  
  if(!posterPath) return null;

  return (
    <div className="w-36 md:w-28 pr-4 hover:w-[120px]">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard