import { createSlice } from "@reduxjs/toolkit"

const mediaSlice = createSlice({
    name: "media",
    initialState:{
        video: null,
    },
    reducer: {
        addVideo : (state, action) => {
            state.video = action.payload
        },
    },
}) 

export const {addVideo} = mediaSlice.actions;
export default mediaSlice.reducer;