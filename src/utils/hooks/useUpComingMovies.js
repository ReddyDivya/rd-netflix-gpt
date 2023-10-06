import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../movieSlice";
import { API_OPTIONS } from "../constants";

const useUpComingMovies = () => {
    const dispatch = useDispatch();

    //get 'UpComing Movies' from the redux store
    const upComingMovies = useSelector((store) => store.movies);

    
    //fetch 'UpComing Movies' from the TMDB api
    const getUpComingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        //adding 'UpComing Movies' to the redux store
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(() => {
        getUpComingMovies();
    }, [])
}

export default useUpComingMovies;