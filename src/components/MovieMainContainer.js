import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaPlayCircle} from "react-icons/fa";
import { MdOutlineBookmarkAdd, MdCancel, MdOutlineBookmarkRemove } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IMG_CDN_URL } from '../utils/constants';
import Genre from './Genre';
import CircularRatingBar from './CircularRatingBar';
import VideoBackground from './VideoBackground';
import { addFavouriteMovie, addWatchList, removeFavouriteMovie, removeWatchList } from '../utils/slices/movieSlice';
import useMovieTrailer from '../utils/hooks/useMovieTrailer';
// import {VideoBackground, CircularRatingBar, Genre} from './index';
// import { addFavouriteMovie, addWatchList, removeFavouriteMovie, removeWatchList } from '../utils/slices/movieSlice';

const MovieMainContainer = () => {
    const dispatch = useDispatch();  
    const favourites = useSelector((store) => store?.movies?.favourites);
    const watchList = useSelector((store) => store?.movies?.watchList);
    const movieId = useParams(); //fetching the movieId
    const details = useSelector((store) => store?.movieDetails);//fetching movie details from the redux store
    
    const [isFavourite, setFavourite] = useState(false);
    const [isInWatchlist, setInWatchlist] = useState(false);
    const [toggle, setToggle] = useState(false);
    
    const year = new Date(details?.movieDetails?.release_date).getFullYear();
    const hours = Math.floor(details?.movieDetails?.runtime/60);
    const minutes = Math.floor(details?.movieDetails?.runtime%60);

    //fetching trailer if it exists in the redux store
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    //play the trailer
    const handleTrailerPlay = () => {
        setToggle(!toggle);
        !trailerVideo && toast.error("No trailer available");
    };

    //close the trailer
    const handleCloseTrailer = () => {
      setToggle(false);
    }

    //add movie to favourites
    const handleAddToFavourite = () => {
      setFavourite(!isFavourite);
  
      if (!isFavourite) {
        dispatch(addFavouriteMovie(details?.movieDetails));
      } else {
        dispatch(removeFavouriteMovie(details?.movieDetails?.id));
      }
    };
    
    //add movie to watchlist
    const handleAddToWatchList = () => {
      setInWatchlist(!isInWatchlist);

      if (!isInWatchlist) {
        dispatch(addWatchList(details?.movieDetails));
      } else {
        dispatch(removeWatchList(details?.movieDetails?.id));
      }
    }

    // Update isFavourite state when details change
    useEffect(() => {
      setFavourite(
        favourites && favourites.some((movie) => movie.id === details?.movieDetails?.id)
      );
    }, [details, favourites]);

    // Update isInWatchlist state when details change
    useEffect(() => {

      setInWatchlist(
        watchList && watchList.some((movie) => movie.id === details?.movieDetails?.id)
      );
  
    }, [details, watchList]);
  
  return (

    <div>
        <div className="relative">
          <img
            className="h-[400px] md:w-full md:h-screen absolute object-cover -z-10"
            alt="backdropImg"
            src={IMG_CDN_URL + details.movieDetails?.backdrop_path}
          />
          <div className="w-full h-[400px] md:w-full md:h-screen absolute -z-10 bg-black md:bg-opacity-80 bg-opacity-70"></div>
          
          <div className="md:w-full md:h-full md:flex md:flex-row flex flex-col items-center">            
          
            {/* left - Movie poster */}
            <div className="mt-[100px] w-28 relative top-16 md:top-0 md:bottom-6 left-10 md:left-0 md:w-4/12 md:p-20 flex md:pt-[130px]">
              <img
                className="mx-auto rounded-lg h-40 md:h-64"
                alt="moviePoster"
                src={IMG_CDN_URL + details.movieDetails?.poster_path}
              />
            </div>

            <div className="w-full min-h-[500px] bg-[#0a0908] pt-5 md:bg-transparent relative top-20 m-3 p-2 md:top-20 flex flex-col md:flex md:flex-col justify-start items-start text-white">
              
              {/* Title */}
              <h1 className="px-1 md:px-0 text-3xl font-semibold ">
                {details.movieDetails?.original_title}
              </h1>

              {/* tagline */}
              <i className="font-light text-sm mt-2">{details.movieDetails?.tagline}</i>
              <div className=" flex py-2">
                <h3>{year}</h3>

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
                  onClick={handleAddToFavourite}
                  className="md:mx-2 mx-1 px-2 py-2 transition hover:-translate-y-1 after:text-red-600"
                >
                { isFavourite ? (
                    <FavoriteIcon key={details?.movieDetails?.id} fontSize="large" style={{ color: 'red', cursor: 'pointer' }} />
                  ) : (
                    <FavoriteIcon key={details?.movieDetails?.id} fontSize="large" style={{ color: 'gray', cursor: 'pointer' }} />
                  )
                }
                </button>
                
                {/* save to watchlist */}
                <button
                  onClick={handleAddToWatchList}
                  className="md:mx-2 mx-1 px-2 py-2 transition hover:-translate-y-1 after:text-red-600"
                >
                  {isInWatchlist ? (
                    <MdOutlineBookmarkRemove size={32} style={{ color: 'blue', cursor: 'pointer' }} />
                  ) : (
                    <MdOutlineBookmarkAdd size={32} style={{ color: 'gray', cursor: 'pointer' }} />
                  )}
                </button>
                
                <button
                  onClick={() => {
                    handleTrailerPlay();
                  }}
                  className="text-xl mx-1 px-2 py-2 transition hover:-translate-y-1 md:px-2 text-white rounded-lg"
                >
                  <FaPlayCircle size={32}/>
                </button>
              </div>

              {/* overview */}
              <div className="px-4 py-2 pb-5 md:px-0">
                <h3 className="text-xl font-medium">Overview</h3>
                <p className="md:w-3/4">{details.movieDetails?.overview}</p>
              </div>
            </div>
          </div>

          {/* display trailer video */}
          {(toggle && trailerVideo) && (
          <div className="w-full h-screen fixed top-0 left-0 right-0 md:right-40 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="w-8/12 md:w-[50%] relative right-10 md:right-20">
              <button
                onClick={handleCloseTrailer}
                className="absolute text-white top-[-4] md:top-4 right-30 cursor-pointer z-20"
              >
                <MdCancel size={32} />
              </button>
              <div className="aspect-video px-2">
                <VideoBackground movieId={movieId} widthScreen="w-8/12" />
              </div>
            </div>
          </div>
        )}
        </div>

        {/* alert message*/}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  )
}

export default MovieMainContainer