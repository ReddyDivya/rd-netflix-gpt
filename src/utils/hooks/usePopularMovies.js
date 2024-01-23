import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../slices/movieSlice';
import { API_OPTIONS } from '../constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  
  //getting Popolar movies info from the redux store
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  //fetching Popular movies
  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    
    //adding Popular movies to the redux store
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    //Memoization - If there's no popular movies exists, make a call & fetch Popular movies
    !popularMovies && getPopularMovies();
  }, [])
}

export default usePopularMovies