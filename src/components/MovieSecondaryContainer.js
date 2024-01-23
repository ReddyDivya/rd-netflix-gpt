import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMovieCredits from '../utils/hooks/useMovieCredits'
import MovieCastCard from './MovieCastCard';
import useMovieReview from '../utils/hooks/useMovieReview';
import Review from "./Review";
import useSimilarMovies from '../utils/hooks/useSimilarMovies';
import MovieList from './MovieList';
import useRecommendedMovies from '../utils/hooks/useRecommendedMovies';
// import {useMovieReview, useSimilarMovies, useMovieCredits} from '../utils/hooks/index';
// import {MovieList, Review, MovieCastCard} from './index';
// import useRecommendedMovies from '../utils/hooks/useRecommendedMovies';

const MovieSecondaryContainer = () => {
  const movieId = useParams();
  
  useMovieCredits(movieId);//add movie credits to the redux
  useMovieReview(movieId);//add movie review to the redux
  useSimilarMovies(movieId);//add similar movies to the redux
  useRecommendedMovies(movieId);//add recommended movies to the redux

  //fetching movie cast from the redux
  const movieCast = useSelector((store) => store.credits?.cast);

  //fetching movie reviews from the redux
  const movieReviews = useSelector((store) => store.reviews?.review);
  
  //fetching similar movies from the redux
  const similarMovies = useSelector((store) => store.movies?.similarMovies);

  //fetching recommended movies from the redux
  const recommendedMovies = useSelector((store) => store.movies?.recommendedMovies);

  return (
    <div className="mt-24 px-3 md:mt-14 md:px-8 md:py-10">
        <h3 className="font-semibold text-2xl text-black">Top Billed Cast</h3>
        
        {/* movie credits/cast */}
        <div className="pt-2 flex overflow-x-scroll no-scrollbar scroll-smooth">
            {movieCast?.cast?.map((cast) => (
                <MovieCastCard
                key={cast?.id}
                img_path={cast?.profile_path}
                name={cast?.name}
                character={cast?.character}
                />
            ))}
        </div>

         {/* movie review */}
         {movieReviews && movieReviews.length > 0 && (
            <h3 className="font-semibold text-2xl text-black mt-2">
              Reviews
            </h3>
          )}
         <div className="pt-2 flex overflow-x-scroll no-scrollbar scroll-smooth">
            <div>
                {movieReviews?.map((review) => (
                  <Review
                    key={review?.id}
                    id={review?.id}
                    username={review?.author_details?.username}
                    rating={review?.author_details?.rating}
                    date={review?.created_at}
                    content={review?.content}
                  />
                ))}
            </div>
         </div>

         {/* similar movies */}
         {
           similarMovies && similarMovies.length > 0 && (<div className="overflow-x-scroll no-scrollbar scroll-smooth">
              {/* <h3 className="font-semibold text-2xl text-black">Similar Movies</h3> */}
              <MovieList
               title={"Similar Movies"}
               movies={similarMovies}
               textColor={"text-black"}
              />
           </div>)
         }

         {/* recommended movies*/}
         {
           recommendedMovies && recommendedMovies.length > 0 && (<div className="overflow-x-scroll no-scrollbar scroll-smooth">
              {/* <h3 className="font-semibold text-2xl text-black">Recommended Movies</h3> */}
              <MovieList
               title = {"Recommended Movies"}
               movies={recommendedMovies}
               textColor={"text-black"}
              />
           </div>)
         }
    </div>
  )
}

export default MovieSecondaryContainer