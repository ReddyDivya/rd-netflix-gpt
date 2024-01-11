import React from 'react'
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const MovieList = ({title, movies, textColor, gradient, genre}) => {
  return (
    <div className="px-6">
        <h1 className={`md:text-xl font-bold mt-2 pt-4 pb-2 ${textColor}`}>{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {
                    movies?.map((movie) => <MovieCard key={movie?.id} 
                    title={movie?.title}
                    movieId={movie?.id}
                    date={movie?.release_date}
                    rating={movie?.vote_average?.toFixed(1)}
                    posterPath={movie.poster_path}
                    textColor={textColor}
                    genre={movie?.genre}
                    movie={movie}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList