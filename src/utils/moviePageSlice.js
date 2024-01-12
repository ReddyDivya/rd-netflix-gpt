import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
  name: "moviePage",
  initialState: {
    movieDetails: null,
    movieClicked: null,
  },
  reducers: {
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addMovieClicked: (state, action) => {
      state.movieClicked = action.payload;
    },
    removeMovieDetails: (state, action) => {
      state.movieDetails = null;
    },
  },
});

export const { addMovieDetails, removeMovieDetails, addMovieClicked } =  moviePageSlice.actions;
export default moviePageSlice.reducer;