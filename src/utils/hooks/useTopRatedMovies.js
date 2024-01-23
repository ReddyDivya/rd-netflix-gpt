import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../constants';
import { addTopRatedMovies } from '../slices/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  //get 'Top Rated Movies' from the redux store
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  //fetch 'Top Rated Movies' from the TMDB api
  const getTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();

    //adding 'Top Rated Movies' to the redux store
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    //Memoization - If there's no 'Top Rated Movies' exists, make a call & fetch movies
    !topRatedMovies && getTopRatedMovies();
  }, [])
}

export default useTopRatedMovies