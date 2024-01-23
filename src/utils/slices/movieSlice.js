import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
        similarMovies: null,
        recommendedMovies: null,
        favourites: null,
        watchList: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo  = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies : (state, action) => {
            state.upComingMovies = action.payload;
        },
        addSimilarMovies : (state, action) => {
            state.similarMovies = action.payload;
        },
        addRecommendedMovies : (state, action) => {
            state.recommendedMovies = action.payload;
        },

        //add movie to favourites 
        addFavouriteMovie: (state, action) => {
            // Check if state.favourites is an array or initialize it as an empty array
            const favouritesArr = Array.isArray(state.favourites) ? state.favourites : [];

            let movieIndex  = favouritesArr.findIndex((movie) => movie?.id === action.payload?.id);

            if(movieIndex  >= 0 ) //movie is already in favourites
            {
                toast.info("Already in Favourites");
                return state;
            }
            
            // Add the movie to favorites (creating a new state object)
            const updatedFavourites = [...favouritesArr, action.payload];
            toast.success("Added to Favourites");

            // Return a new state object with updated favourites
            return { ...state, favourites: updatedFavourites };
        },
        
        //remove movie from favourites 
        removeFavouriteMovie : (state, action) => {
            state.favourites = state.favourites.filter((movie) => movie?.id !== action.payload);
            toast.error("Movie removed from Favourites");
        },

        //add to watching list
        addWatchList : (state, action) => {

            // Check if state.watchList is an array or initialize it as an empty array
            const watchListArr = Array.isArray(state.watchList) ? state.watchList : [];

            let movieIndex  = watchListArr.findIndex((movie) => movie?.id === action.payload.id);

            if(movieIndex >= 0) //already in watchlist
                toast.info("Already in Watchlist");
            else //add to watchlist
            {
                // Add the movie to watchList (creating a new state object)
                state.watchList = [...watchListArr, action.payload]
                toast.success("Added to Watchlist");
            }
        },

        //remove movie from watchlist
        removeWatchList : (state, action) => {
            state.watchList = state.watchList.filter((movie) => movie?.id !== action.payload);
            toast.error("Movie removed from Watchlist");
        },
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addFavouriteMovie, removeFavouriteMovie, addWatchList, removeWatchList, addSimilarMovies, addRecommendedMovies } = movieSlice.actions;

export default movieSlice.reducer;