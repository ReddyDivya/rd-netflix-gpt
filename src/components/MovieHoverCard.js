import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';
import { FaRegPlayCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiCaretCircleDownFill } from "react-icons/pi";

const MovieHoverCard = ({title, posterPath}) => {
  return (
    <div className="graybackgroundColor p-4 text-white rounded-md absolute md:bottom-24 md:top-2 md:left-[-30px] md:w-full h-full z-20 mx-auto">
        <img alt="Movie Card" 
        src={IMG_CDN_URL + posterPath}
        className="object-contain w-auto h-auto"/>
        <div className="flex items-center justify-between mt-4">
            <FaRegPlayCircle size={30}/>
            <FaCirclePlus size={30}/>
            <SlLike size={30}/>
            <PiCaretCircleDownFill size={30}/>
        </div>

        {/* <h2 className="text-xl font-bold mb-2">{title}</h2> */}
    </div>
  )
}

export default MovieHoverCard