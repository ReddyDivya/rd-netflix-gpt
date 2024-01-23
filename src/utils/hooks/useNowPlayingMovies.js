import {useEffect} from 'react';
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../slices/movieSlice";
import {useDispatch, useSelector} from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    //get 'now playing Movies' from the redux store
   const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    // Fetch Data from TMDB API and update store
    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      //Memoization - If there's now playing movies exists, don't make a call & fetch movies
      !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;