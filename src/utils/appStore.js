import {configureStore} from '@reduxjs/toolkit';
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";
import gptReducer from "../utils/gptSlice";
import configReducer from "../utils/configSlice";
import creditsReducer from "../utils/creditsSlice";
import mediaReducer from "../utils/mediaSlice";
import movieDetailsReducer from "../utils/moviePageSlice";
import pathReducer from "../utils/pathSlice";
import reviewReducer from "../utils/reviewSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
        credits: creditsReducer,
        media: mediaReducer,
        movieDetails: movieDetailsReducer,
        path:pathReducer,
        review: reviewReducer,
    }
})

export default appStore;