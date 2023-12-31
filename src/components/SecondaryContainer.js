import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return movies.nowPlayingMovies && (
    <div className="graybackgroundColor">
      <div className="mt-0 md:-mt-40 pl-4 md:pl-6 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer