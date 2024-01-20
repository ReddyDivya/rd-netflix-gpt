import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser : (state, action) => {
            return action.payload;
        },
        removeUser : (state, action) => {
            return null;
        },
    }
})

//exporting the actions
export const {addUser, removeUser} = userSlice.actions;

//exporting the reducer
export default userSlice.reducer;