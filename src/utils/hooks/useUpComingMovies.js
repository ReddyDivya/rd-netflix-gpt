import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../slices/movieSlice";
import { API_OPTIONS } from "../constants";

const useUpComingMovies = () => {

    const dispatch = useDispatch();

    //get 'UpComing Movies' from the redux store
    const upComingMovies = useSelector((store) => store.movies.upComingMovies);

    
    //fetch 'UpComing Movies' from the TMDB api
    const getUpComingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        //adding 'UpComing Movies' to the redux store
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(() => {
        //Memoization - If there's no 'UpComing Movies' exists, make a call & fetch UpComing movies
       !upComingMovies && getUpComingMovies();
    }, [])
}

export default useUpComingMovies;