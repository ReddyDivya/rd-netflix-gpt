import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../constants';
import { addTrailerVideo } from '../movieSlice';

//this is to add movie trailer to the redux store by fetching it through the api
const useMovieTrailer = ({movieId}) => {

  const dispatch = useDispatch();

  //fetching the trailer from the redux store
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {

    
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
    // const data = await fetch("https://api.themoviedb.org/3/movie/980489/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];//if trailer data exists show that otherwise first movie video from the response

    //adding trailer to the redux store
    dispatch(addTrailerVideo(trailer))
  };//getMovieVideos

  useEffect(() => {
    //Memoization - add trailer to the redux only if there's no movie trailer exists.
    !trailerVideo && getMovieVideos();
  }, [])
}

export default useMovieTrailer