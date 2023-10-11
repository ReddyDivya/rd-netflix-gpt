import React from 'react'
import { BG_URL } from '../utils/constants'
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <>
        <div className="absolute -z-10">
          <img className="" src={BG_URL} alt="logo"/>
        </div>

        <div className="">
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    </>
  )
}

export default GptSearch