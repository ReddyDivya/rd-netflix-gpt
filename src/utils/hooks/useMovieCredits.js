import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addCast } from "../slices/creditsSlice";

//movie credits
const useMovieCredits = ({movieId}) => {
    const dispatch = useDispatch();

    //fetch movie credits
    const getMovieCredits = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" +
        movieId + "/credits?language=en-US", API_OPTIONS);

        const json = await data.json();
        dispatch(addCast(json));//add movie credits to the redux
    };


    useEffect(() => {
        getMovieCredits();
    }, [movieId])
}

export default useMovieCredits;