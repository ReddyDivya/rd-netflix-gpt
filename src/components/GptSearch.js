import React from 'react'
import { useDispatch } from 'react-redux';
import { BG_URL } from '../utils/constants'
import { addPath } from '../utils/slices/pathSlice'; 
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from './GptMovieSuggestions';
// import {GptMovieSuggestions, GptSearchBar} from './index';

const GptSearch = () => {
  const dispatch = useDispatch();
  dispatch(addPath(window.location.pathname));

  return (
    <>
        <div className="fixed -z-10">
          {
            /*
            Mobile => 
            h-screen(for banner to take entire screen height)
            object-cover(Resize an image to cover its entire container)
            */
          }
          <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="logo"/>
        </div>

        <div className="pt-[30%] md:p-0">
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    </>
  )
}

export default GptSearch