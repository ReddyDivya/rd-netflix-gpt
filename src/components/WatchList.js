import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPath } from '../utils/pathSlice';
import { MdCancel } from 'react-icons/md';
import MovieCard from "./MovieCard";
import { removeWatchList } from '../utils/movieSlice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const WatchList = () => {
  const watchList = useSelector((store) => store?.movies?.watchList);

  const dispatch = useDispatch();

  const pathname = window.location.pathname;

  useEffect(() => {
    dispatch(addPath(pathname));
  }, [])

  return (
    <div className="w-full min-h-screen pt-[150px] px-5 md:pt-[120px] md:pb-5 md:px-10 text-white graybackgroundColor">
      <h2 className="text-3xl font-bold text-white">WatchList</h2>
      {watchList?.length === 0 ? (
        <div className="w-[200px] md:w-[300px] pt-32 md:pt-44 md:py-20 relative top-60 md:top-48 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <p className="text-center text-2xl font-bold text-white">
            No WatchList Movies
          </p>
        </div>
      ) : <div className="grid grid-cols-2 md:grid-cols-6 pl-2 mx-auto">
      {watchList?.map((movie) => (
        <div>
          <button onClick={() => {
              dispatch(removeWatchList(movie?.id));
            }}
            className="relative top-[25px] right-[-110px] md:right-[-160px] text-gray-500 transition hover:-translate-y-1 hover:text-red-600 z-10"
          >
            <MdCancel size={32} />
          </button>
          <Link key={movie?.id} to={`/movie/${movie?.id}`}>
            <div>
              <MovieCard key={movie?.id} 
                title={movie?.title}
                movieId={movie?.id}
                date={movie?.release_date}
                rating={movie?.vote_average?.toFixed(1)}
                vote={movie?.vote_count}
                posterPath={movie.poster_path}
                textColor={'text-white'}
                genre={movie?.genre}
                movie={movie}/>
            </div>
          </Link>
        </div>
      ))}
    </div>
    }
      
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
  );
};

export default WatchList;