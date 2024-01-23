import React from 'react'
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';
// import {MovieCard} from './index';

const MovieList = ({title, movies, textColor}) => {
  
  return (
    <div className="px-6">
        <h1 className={`md:text-xl font-bold mt-2 pt-4 pb-2 ${textColor}`}>{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex flex-wrap">
                {
                    movies?.map((movie) => (<Link key={movie?.id} to={`/movie/${movie?.id}`}>
                    <div>
                      <MovieCard key={movie?.id} 
                      title={movie?.title}
                      movieId={movie?.id}
                      date={movie?.release_date}
                      rating={movie?.vote_average?.toFixed(1)}
                      vote={movie?.vote_count}
                      posterPath={movie.poster_path}
                      textColor={textColor}
                      genre={movie?.genre}
                      movie={movie}/>
                    </div>
                  </Link>))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList