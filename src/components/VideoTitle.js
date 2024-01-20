import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({movieId, title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-4 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-4 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0 flex items-center">
            <Link key={movieId} to={`/movie/${movieId}`}>
              <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-60"><FaPlay size={20}/></button>
            </Link>
            {/* <Link key={movieId} to={`/movie/${movieId}`}> */}
            <Link>
              <button className="md:inline-block mx-2 bg-gray-500 text-white py-4 px-6 text-xl bg-opacity-30 flex flex-row justify-between h-14 rounded-lg">More Info</button>
            </Link>  
        </div>
    </div>
  )
}

export default VideoTitle