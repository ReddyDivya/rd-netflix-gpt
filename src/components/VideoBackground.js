import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/hooks/useMovieTrailer';
// import {useMovieTrailer} from '../utils/hooks/index';

const VideoBackground = ({movieId, widthScreen}) => {
 //fetching trailer if it exists in the redux store
 const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//adding or fetching the movie trailer to or from the redux
useMovieTrailer({movieId});

 return (
    <div className="w-screen">
        <iframe className={`${widthScreen} aspect-video`}
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
        </iframe>
    </div>
  )
}
export default VideoBackground