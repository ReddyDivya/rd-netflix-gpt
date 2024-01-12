import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';
import { FaPlayCircle, FaRegStar } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineBookmarkAdd, MdCancel } from "react-icons/md";
import Genre from './Genre';
import CircularRatingBar from './CircularRatingBar';
import VideoBackground from './VideoBackground';
import { ToastContainer, toast } from "react-toastify";

const TopContainer = () => {
    const [toggle, setToggle] = useState(false);
    const movieId = useParams(); //fetching the movieId
    const details = useSelector((store) => store?.movieDetails);//fetching movie details from the redux store
    
    const dispatch = useDispatch();

    const date = details?.movieDetails?.release_date;
    const hours = Math.floor(details?.movieDetails?.runtime/60);
    const minutes = Math.floor(details?.movieDetails?.runtime%60);

    //fetching movie trailer of the clicked movie
    const movieTrailer = useSelector((store) => store.movies?.trailerVideo);
    const keys = movieTrailer?.key;

    //play the video
    const handlePlay = () => {
        setToggle(!toggle);
    };

    //pause the video
    const handlePause = () => {
        setToggle(false);
    }

    //add movie to favourites
    const addToFavourite = () => {
        dispatch(addToFavourite(details?.movieDetails))
    }
    
    //add movie to watchlist
    const addToWatchList = () => {
        dispatch(addToWatchList(details?.movieDetails))
    }

  return (
    <div>
        <div className="relative">
          <img
            className=" h-[250px] md:w-full md:h-screen absolute object-cover -z-10"
            alt="backdropImg"
            src={IMG_CDN_URL + details.movieDetails?.backdrop_path}
          />
          <div className="w-full h-[250px] md:w-full md:h-screen absolute -z-10 bg-black md:bg-opacity-80 bg-opacity-60"></div>
          
          <div className="md:w-full md:h-full md:flex md:flex-row flex flex-col items-center">            
          
            {/* left - Movie poster */}
            <div className="w-28 relative top-16 md:top-0 md:bottom-6 left-10 md:left-0 md:w-4/12 md:p-20 flex md:pt-[130px]">
              <img
                className="mx-auto rounded-lg h-40 md:h-64"
                alt="moviePoster"
                src={IMG_CDN_URL + details.movieDetails?.poster_path}
              />
            </div>

            <div className="w-full min-h-[500px] bg-[#0a0908] pt-5 md:bg-transparent relative top-20 md:top-20 flex flex-col md:flex md:flex-col justify-start items-start text-white">
              
              {/* Title */}
              <h1 className="px-4 md:px-0 text-3xl font-semibold ">
                {details.movieDetails?.original_title}
              </h1>

              {/* tagline */}
              <p className="font-light text-sm">{details.movieDetails?.tagline}</p>
              <div className=" flex py-2">
                <h3>{date}</h3>

                <h3 className="mx-2">{hours + "h " + minutes + "m"}</h3>
              </div>

              {/* Genre*/}
              <h3 className="flex">
                {details.movieDetails?.genres.map((genre) => (
                  <Genre key={genre?.id} genre={genre?.name} />
                ))}
              </h3>
              
              {/* Rating */}
              <div className="flex md:my-3 py-2">
                <div className="w-11 mx-1 px-1 py-2 md:px-0 md:w-12 md:py-3 md:mr-2">
                  <CircularRatingBar rating={details.movieDetails?.vote_average.toFixed(1)}
                  />
                </div>

                {/* add to favourite */} 
                <button
                  onClick={addToFavourite}
                  className="md:mx-4 mx-1 px-2 py-2 transition hover:-translate-y-1 after:text-red-600"
                >
                  <GiSelfLove size={32}/>
                </button>
                
                {/* save to watchlist */}
                <button
                  onClick={addToWatchList}
                  className="md:mx-4 mx-1 px-2 py-2  transition hover:-translate-y-1 after:text-red-600"
                >
                  <MdOutlineBookmarkAdd size={32}/>
                </button>
                

                <button className="md:mx-4 mx-1 px-2 py-2  transition hover:-translate-y-1 after:text-red-600">
                  <MdOutlineBookmarkAdd size={32}/>
                </button>
                <button
                  onClick={() => {
                    handlePlay();
                  }}
                  className="text-xl mx-1 px-2 py-2  transition hover:-translate-y-1 nd:px-2 text-white rounded-lg"
                >
                  <FaPlayCircle size={32}/> Play
                </button>
              </div>

              {/* overview */}
              <div className="px-4 py-2 pb-5 md:px-0">
                <h3 className="text-xl font-medium">Overview</h3>
                <p className="md:w-3/4">{details.movieDetails?.overview}</p>
              </div>
            </div>
          </div>

          {/* {toggle && (<>
            <div className="w-full h-screen absolute flex items-center">
                <div className="w-full aspect-video px-2 md:w-[50%] z-30 top-[45%] md:top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 absolute">
                  <VideoBackground movieId={movieId} />
                </div>
                <div
                  onClick={handlePause}
                  className="w-full h-screen flex text-white bg-black bg-opacity-95 z-20 absolute"
                >
                  <h2 className="pt-8 pl-8 font-medium text-xl">
                    Movie Trailer
                  </h2>
                  <button className="absolute transition hover:-translate-y-1 p-8 right-0">
                    <MdCancel size={32} />
                  </button>
                </div>
              </div>{" "}
          </>)} */}
        </div>

        {/* alert message*/}
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
          />
    </div>
  )
}

export default TopContainer