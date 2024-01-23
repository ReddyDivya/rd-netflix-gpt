import React from 'react';
import {useSelector} from "react-redux";
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
// import {VideoTitle, VideoBackground} from './index';

const MainContainer = () => {
 //fetching data from redux store
 const movies = useSelector((store) => store.movies?.nowPlayingMovies);
 
 if(!movies) return; //return if there's no movies info

 const mainMovie = movies[0];//fetching first movie info

 //destructuring the values from movie info
 const {original_title, overview, id} = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle movieId={id} title={original_title} overview={overview}/>
        <VideoBackground movieId={id} widthScreen={"w-screen"}/>
    </div>
  )
}

export default MainContainer