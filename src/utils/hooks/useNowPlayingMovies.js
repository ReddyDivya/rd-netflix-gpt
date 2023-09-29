import {useEffect} from 'react';
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../movieSlice";
import {useDispatch} from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    // Fetch Data from TMDB API and update store
    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;