import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../utils/constants';
import { FaPlayCircle} from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MdOutlineBookmarkAdd, MdCancel, MdOutlineBookmarkRemove } from "react-icons/md";
import Genre from './Genre';
import CircularRatingBar from './CircularRatingBar';
import VideoBackground from './VideoBackground';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addFavouriteMovie, addWatchList, removeFavouriteMovie, removeWatchList } from '../utils/movieSlice';

const TopContainer = () => {
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

    //fetching movie trailer of the clicked movie
    const movieTrailer = useSelector((store) => store.movies?.trailerVideo);
    // const keys = movieTrailer?.key;

    //play the video
    const handlePlay = () => {
        setToggle(!toggle);
    };

    //close the video
    const handleClose = () => {
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

    useEffect(() => {

      // Update isFavourite state when details change
      setFavourite(
        favourites && favourites.some((movie) => movie.id === details?.movieDetails?.id)
      );
  
    }, [details, favourites]);

    useEffect(() => {

      setInWatchlist(
        watchList && watchList.some((movie) => movie.id === details?.movieDetails?.id)
      );
  
    }, [details, watchList]);
  
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
                  className="md:mx-4 mx-1 px-2 py-2 transition hover:-translate-y-1 after:text-red-600"
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
                  className="md:mx-4 mx-1 px-2 py-2  transition hover:-translate-y-1 after:text-red-600"
                >
                  {isInWatchlist ? (
                    <MdOutlineBookmarkRemove size={32} style={{ color: 'blue', cursor: 'pointer' }} />
                  ) : (
                    <MdOutlineBookmarkAdd size={32} style={{ color: 'gray', cursor: 'pointer' }} />
                  )}
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

          {toggle && (<>
            <div className="w-full h-screen absolute flex items-start justify-start">
                <div className="w-full aspect-video px-2 md:w-[50%] z-30 top-[45%] md:top-[-23%] left-[35%] -translate-x-1/2 -translate-y-1/2 absolute">
                  <VideoBackground movieId={movieId} widthScreen={"w-8/12"} />
                </div>
                <button onClick={handleClose} className="absolute text-white md:top-[-65%] md:right-[17%]">
                    <MdCancel size={32} className="cursor-pointer" />
                </button>
              </div>{" "}
          </>)}
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

export default TopContainer