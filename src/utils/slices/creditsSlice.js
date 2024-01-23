import { createSlice } from "@reduxjs/toolkit";

//cast credits
const creditsSlice = createSlice({
    name: "credits",
    initialState: {
        cast: null,
    },
    reducers: {
        addCast: (state, action) => {
            state.cast = action.payload
        },
    },
});

export default creditsSlice.reducer;
export const {addCast} = creditsSlice.actions;