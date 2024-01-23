import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../constants';
import { addMovieDetails } from '../slices/moviePageSlice';

//this is to get movie details from the redux store
const useMovieDetails = ({movieId}) => {
    
    const dispatch = useDispatch();

    // const movieDetails = useSelector((store) => store.moviePage.movieDetails);

    // Fetch Data from TMDB API and update store
    const getMovieDetails = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US", API_OPTIONS);
        
        const json = await data.json();
        dispatch(addMovieDetails(json));//adding movie details to the redux store
    };

    useEffect(() => {
       getMovieDetails();
    }, [movieId])
}

export default useMovieDetails