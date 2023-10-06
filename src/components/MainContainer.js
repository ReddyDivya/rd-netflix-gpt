import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import {useSelector} from "react-redux";

const MainContainer = () => {
 //fetching data from redux store
 const movies = useSelector((store) => store.movies?.nowPlayingMovies);

 if(!movies) return; //return if there's no movies info

 const mainMovie = movies[0];//fetching first movie info

 //destructuring the values from movie info
 const {original_title, overview, id} = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer