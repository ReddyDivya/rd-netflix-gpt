import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import creditsReducer from "./creditsSlice";
import mediaReducer from "./mediaSlice";
import movieDetailsReducer from "./moviePageSlice";
import pathReducer from "./pathSlice";
import reviewReducer from "./reviewSlice";

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
        reviews: reviewReducer,
    }
})

export default appStore;