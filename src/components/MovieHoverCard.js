import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { FaCirclePlus } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiCaretCircleDownFill } from "react-icons/pi";

const MovieHoverCard = ({title, posterPath, vote}) => {
  return (
    <div className="p-4 text-white rounded-md absolute md:bottom-24 md:top-0 md:left-[-12px] md:w-auto h-full z-20 mx-auto">
        <img alt="Movie Card" 
        src={IMG_CDN_URL + posterPath}
        className="object-contain w-auto h-auto"/>
        <div className="flex items-center justify-between mt-4">
            <FaCirclePlus size={30}/>
            <SlLike size={30}/>{vote}
            <PiCaretCircleDownFill size={30}/>
        </div>
    </div>
  )
}

export default MovieHoverCard