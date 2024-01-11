import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "review",
    initialState:{
        review : null
    },
    reducers: {
        addReview: (state, action) => {
            state.review = action.playload
        }
    }
})

export const {addReview} = reviewSlice.actions;
export default reviewSlice.reducer;