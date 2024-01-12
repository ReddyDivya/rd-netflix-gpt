import React, { useEffect, useState } from 'react'

const Review = ({userName, rating, date, content, clamp}) => {
  let postDate = new Date(date);
  const formatDate = postDate.toLocaleDateString();

  console.log(content)
  const [lineClamp, setlineClamp] = useState(clamp);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  const handleLineClamp = () => {
    if(lineClamp === clamp)
    {
      setlineClamp("");
    }
    else{
      setlineClamp(clamp);
    }
  }

    return (
    <div className="m-2 md:m-5 py-1 px-1 shadow-xl md:py-4 md:px-3 bg-white rounded-lg">
        <p>No comments yet</p>
    </div>
  )
}

export default Review