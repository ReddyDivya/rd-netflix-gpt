import React from 'react'
import MovieCard from './MovieCard';
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md"

const MovieList = ({title, movies}) => {
  return (
    <div className="px-6">
        <h1 className="md:text-xl font-bold mt-2 pt-4 pb-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="absolute z-1 -ml-12 w-10 h-[170px] bg-gradient-to-r from-gray-800 to-transparent py-16 px-2"><i className="text-4xl text-white font-bold"><MdOutlineArrowBackIosNew/></i></div>
              <div className="flex">
                  {
                      movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)
                  }
              </div>
            {/* <div className="absolute z-2 w-10 h-[170px] bg-gradient-to-r from-gray-800 to-transparent py-16 px-2"><i className="text-4xl text-white font-bold"><MdOutlineArrowForwardIos/></i></div> */}
        </div>
    </div>
  )
}

export default MovieList