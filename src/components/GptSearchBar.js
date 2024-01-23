import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from "../utils/languageConstants";
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResults } from '../utils/slices/gptSlice'; 
import openai from '../utils/openai';
import ErrorHandling from './ErrorHandling';
// import {ErrorHandling} from './index';

const GptSearchBar = () => {
  
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  
  const dispatch = useDispatch();
  const gptMoviesList = useSelector((store) => store.gpt.movieResults);


  //search gpt suggested each and every movie in the TMDB
  const searchMovieTMDB = async (movie) => {

    const data = await fetch( "https://api.themoviedb.org/3/search/movie?query=" +
    movie + "&include_adult=true&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();

    return json.results;
  };//searchMovieTMDB

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    //We should give GPT a prompt
    const gptQuery =  "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Bahubali, Billa, Darling, Bujjigadu, Sahoo";

    //We are making openAI calls, we need to set message, role
    const gptResults = await openai.chat.completions.create({
      messages : [{role: "user", content : gptQuery}],
      model : "gpt-3.5-turbo",
    })

    // Error Handling
    if(!gptResults.choices)
    {
        <ErrorHandling/>
    }

    //Bahubali, Billa, Darling, Bujjigadu, Sahoo
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // const gptMovies = ["Bahubali", "Billa", "Darling", "Bujjigadu", "Sahoo"];
    // const gptMovies = ["Aha Naa Pellanta", "Jambalakidi Pamba", "Hello Brother", "Manmadhudu", "Venky", "Dookudu", "Pelli Choopulu", "F2: Fun and Frustration", "Express Raja", "Bhale Bhale Magadivoy", "Ala Modalaindi", "Oopiri"];
    
    //We should search for movies through TMDB API, it gives promises [Promise, Promise, Promise, Promise, Promise]
    const searchMovies = gptMovies.map((movie) => searchMovieTMDB(movie))

    //give all promises for each and every movie
    const tmdbMovieResults = await Promise.all(searchMovies);

    //add to redux store
    dispatch(addGPTMovieResults({movieNames : gptMovies, movieResults : tmdbMovieResults}))
  }//handleGptSearchClick

  return (
    <>
      <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
          <input
            data-testid="languages"
            ref={searchText}
            type="text"
            className="p-1 text-xs md:text-base md:p-3 m-4 col-span-8 md:col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="col-span-3 m-4 py-2 px-1 text-xs md:text-base ml-0 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
        {gptMoviesList === null && (
          <div className="w-[200px] h-[330px] md:w-[300px] mt-20 py-24 md:py-10 relative top-28 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            {/* when no movies are fetch */}
          </div>
        )}
    </>  

  );
}

export default GptSearchBar