import React, { useEffect, useState } from 'react'
import {Avatar, Rating} from "@mui/material";
import { deepOrange } from '@mui/material/colors';

const Review = ({id, username, rating, date, content}) => {
  let postDate = new Date(date);
  const formatDate = postDate.toLocaleDateString();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  }

  const readMoreReview = () => {
    if(content.length > 100){
      return (<button className="text-blue-500 hover:underline focus:outline-none" onClick={toggleExpansion}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>)
    }

    return null;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
    <>
    {!username ? 
      <div className="m-2 md:m-5 py-1 px-1 shadow-xl md:py-4 md:px-3 bg-white rounded-lg">
          <p>No comments yet</p>
      </div>  
      : 
      <div className="border p-4 my-4 rounded-md shadow-md">
        {/* comment, rating */}
        <div className="flex items-start">
          <div className="flex items-center">
            {/* username icon */}
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{username.at(0)}</Avatar>
            <h3 className="text-lg font-semibold ml-2">{username}</h3>
            <div className="ml-4">
              {/* rating */}
              <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </div>
          </div>
        </div>

        {/* comment */}
        <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {content}
        </p>
        {readMoreReview()}

        {/* date */}
        <div className="mt-2 flex items-center">
          <span className="text-gray-400">{formatDate}</span>
          <div className="flex ml-auto">
            {/* You can add additional icons or features here */}
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Review