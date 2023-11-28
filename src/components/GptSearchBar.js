import React, { useRef } from 'react'
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import ErrorHandling from "./ErrorHandling";

import { addGPTMovieResults } from '../utils/gptSlice';
import { API_OPTIONS } from '../utils/constants';
import MovieList from './MovieList';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search gpt suggested each and every movie in the TMDB
  const searchMovieTMDB = async (movie) => {

    const data = await fetch( "https://api.themoviedb.org/3/search/movie?query=" +
    movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

    // console.log('data >>', data);
    const json = await data.json();

    console.log('json >>', json);
    return json.results;
  };//searchMovieTMDB

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results
console.log(searchText.current.value );
    //We should give GPT a prompt
    const gptQuery =  "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Bahubali, Billa, Darling, Bujjigadu, Sahoo";

    //We are making openAI calls, we need to set message, role
    // const gptResults = await openai.chat.completions.create({
    //   message : [{role: "user", content : gptQuery}],
    //   model : "gpt-3.5-turbo",
    // })

    //Error Handling
    // if(!gptResults.choices)
    // {
    //     <ErrorHandling/>
    // }

    // console.log(gptResults.choices?.[0]?.message?.content);

    //Bahubali, Billa, Darling, Bujjigadu, Sahoo
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // const gptMovies = ["Bahubali", "Billa", "Darling", "Bujjigadu", "Sahoo"];
    const gptMovies = ["Bahubali", "Kick", "Rowdy", "Bujjigadu", "Pournami", "Shankar Dada MBBS", "Pelli Choopulu", "RRR", "Chatrapathi", "Ek Niranjan"];
    
    //We should search for movies through TMDB API, it gives promises [Promise, Promise, Promise, Promise, Promise]
    const searchMovies = gptMovies.map((movie) => searchMovieTMDB(movie))

    //give all promises for each and every movie
    const tmdbMovieResults = await Promise.all(searchMovies);

    //add to redux store
    dispatch(addGPTMovieResults({movieNames : gptMovies, movieResults : tmdbMovieResults}))
  }//handleGptSearchClick

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
          <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/>
          <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
    </div>
  )
}

export default GptSearchBar