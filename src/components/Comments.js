import React from 'react'
import { useSelector } from 'react-redux'
import Review from './Review';
// import {Review} from "./index";

const Comments = () => {
  const reviews = useSelector((store) => store?.reviews?.review);

  return (
    <div className="w-full min-h-screen bg-[#caf0f8]">
        <div className="pt-16 px-5 md:pt-[120px] md:pb-5 md:px-10 text-black">
            {/* "Reviews" heading*/}
            <h2 className="text-3xl font-bold text-[#353535]">Reviews</h2>
            {/* No Reviews*/}
            {(reviews?.total_results === 0 || reviews === null) && (
                <div className="w-[200px] md:w-[300px] py-48 md:py-20 relative top-60 md:top-48 left-1/2 transalate-x-[-50%] transalate-y-[-50%]">
                    {/* <img src={NoCommentsIcon} alt="no-comment-icon"/> */}
                    <p className="text-center text-2xl font-bold text-[#023047]">No Comments Yet</p>
                </div>
            )}
            {/* Reviews list */}
            {
                reviews?.results?.map((review) => (<Review 
                    key={review?.id}
                    userName={review?.author_details?.username}
                    rating={review?.author_details?.rating}
                    date={review?.created_at}
                    content={review?.content}
                    clamp={"line-clamp-4"}/>))
            }
        </div>
    </div>
  )
}

export default Comments