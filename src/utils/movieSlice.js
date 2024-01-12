import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//notification messages
const addedToFavouritesMsg = () => toast("Added to Favourites");
const alreadyInFavouritesMsg = () => toast("Already in Favourites");
const addedToWatchListMsg = () => toast("Added to Watchlist");
const alreadyInWatchListMsg = () => toast("Already to Watchlist");

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
        similarMovies: null,
        recommended: null,
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
        addRecommendation : (state, action) => {
            state.recommended = action.payload;
        },

        //add movie to favourites 
        addFavouriteMovie: (state, action) => {
            let favourites = state?.favourites?.findIndex((movie) => movie.id === action.payload.id);

            if(favourites >=0 ) //already in favourites
                alreadyInFavouritesMsg();
            else //add to favourites
            {
                state.watchList.push(action.payload);
                addedToFavouritesMsg();
            }
        },
        
        //remove movie from favourites 
        removeFavouriteMovie : (state, action) => {
            state.favourites = state.favourites.filter((movie) => movie?.id !== action.payload)
        },

        //add to watching list
        addWatchList : (state, action) => {
            let find = state?.watchList?.findIndex(
                (movie) => movie.id === action.payload.id
            );

            if(find >= 0) //already in watchlist
                alreadyInWatchListMsg();
            else //add to watchlist
            {
                state.watchList.push(action.payload);
                addedToWatchListMsg();
            }
        },

        //remove movie from watchlist
        removeWatchList : (state, action) => {
            state.watchList = state.watchList.filter((movie) => movie?.id !== action.payload);
        },
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addFavouriteMovie, removeFavouriteMovie, addWatchList, removeWatchList, addSimilarMovies, addRecommendation } = movieSlice.actions;

export default movieSlice.reducer;