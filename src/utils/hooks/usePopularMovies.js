import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../movieSlice';
import { API_OPTIONS } from '../constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  
  //getting Popolar movies info from the redux store
  const popularMovies = useSelector((store) => store.movies);

  //fetching Popular movies
  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    
    //adding Popular movies to the redux store
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    //If there's no popular movies exists, make a call & fetch Popolar movies
    getPopularMovies();
  }, [])
}

export default usePopularMovies