import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addRecommendedMovies } from "../slices/movieSlice";

const useRecommendedMovies = ({movieId}) => {
    const dispatch = useDispatch();

    const getRecommendedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/ " + movieId + "/recommendations?language=en-US&page=1",
        API_OPTIONS);

        const json = await data.json();
        dispatch(addRecommendedMovies(json.results));
    }

    useEffect(() => {
        getRecommendedMovies();
        window.scrollTo(0, 0);
    }, [movieId])
}

export default useRecommendedMovies;