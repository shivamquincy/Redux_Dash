import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e"
}
export const globalSlice = createSlice ({
    name: "global",
    initialState,
    reducers: {
        setMode : (state) => {
            state.mode = state.mode === "light"? "dark" : "light";
}
    }
})
export const {setMode} = globalSlice.actions; // extracts the set mode action 
export const globalReducer = globalSlice.reducer;  // exports the slice's reducer function