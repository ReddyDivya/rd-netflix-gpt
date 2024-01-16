import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../reviewSlice";
import { API_OPTIONS } from "../constants";


const useMovieReview = ({movieId}) => {
    const dispatch = useDispatch();

    //fetch the movie review from the redux
    const getMovieReview = async() => {
        // const data = await fetch("https://api.themoviedb.org/3/movie/" +  movieId + "/reviews?language=en-US&page=1", API_OPTIONS);
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              movieId +
              "/reviews?language=en-US&page=1",
            API_OPTIONS
        );

        const json = await data.json();
        dispatch(addReview(json));//add movie reviews to the redux
    }

    useEffect(() => {
        getMovieReview();
    }, [movieId])
}

export default useMovieReview;
