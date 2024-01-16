import React, { useState } from 'react'
import useMovieCredits from '../utils/hooks/useMovieCredits'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieCastCard from './MovieCastCard';
import useMovieReview from '../utils/hooks/useMovieReview';
import Review from "./Review";

const MiddleContainer = () => {
  const movieId = useParams();
 
  useMovieCredits(movieId);//add movie credits to the redux
  useMovieReview(movieId);//add movie review to the redux

  //fetching movie cast from the redux
  const movieCast = useSelector((store) => store.credits?.cast);

  //fetching movie reviews from the redux
  const movieReviews = useSelector((store) => store.reviews?.review);

  return (
    <div className="mt-24 px-3 md:mt-0 md:px-8 md:py-10">
        <h3 className="font-semibold text-2xl text-white">Top Billed Cast</h3>
        
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
         <div className="pt-2 flex overflow-x-scroll no-scrollbar scroll-smooth">
            <div>
              <Review
                  key={123}
                  id={123}
                  username={'Divya'}
                  rating={4}
                  date={'15-01-2024'}
                  content={`In this version, I've added a Rating section to the right of the comment and a "Read More" link if the comment exceeds 200 words. The line-clamp-5 class is used to truncate the text after 5 lines, but it is removed when the comment is expanded`} 
                />
                <Review
                  key={13}
                  id={13}
                  username={'Reddy'}
                  rating={3.5}
                  date={'15-01-2024'}
                  content={`In this version, I've added a Rating section to the right of the comment and a "Read More" link if the comment exceeds 200 words. The line-clamp-5 class is used to truncate the text after 5 lines, but it is removed when the comment is expanded. In this version, I've added a Rating section to the right of the comment and a "Read More" link if the comment exceeds 200 words. The line-clamp-5 class is used to truncate the text after 5 lines, but it is removed when the comment is expanded. In this version, I've added a Rating section to the right of the comment and a "Read More" link if the comment exceeds 200 words. The line-clamp-5 class is used to truncate the text after 5 lines, but it is removed when the comment is expanded.`}
                />
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
    </div>
  )
}

export default MiddleContainer