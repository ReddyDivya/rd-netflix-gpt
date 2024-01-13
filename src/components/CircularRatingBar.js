import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularRatingBar = ({rating}) => {
  return (
    <div>
        <CircularProgressbar 
        value={rating}
        maxValue={10}
        text={`${rating}%`}
        styles={buildStyles({
          textColor: '#fff',
          bgColor:'#000',
          pathColor: rating < 5 ? "red" : (rating < 7 ? "orange" : "green"),
          textSize: "large",
        })}/>
    </div>
  )
}

export default CircularRatingBar