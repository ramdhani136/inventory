import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        main: {
            slider: false,
            search: false,
            searchheader: "",
        },
    },
    reducers: {
        toggleSlider: (state, action) => {
            state.main = action.payload;
        },
    },
});

export const { toggleSlider } = mainSlice.actions;

export const selectMain = (state) => state.main.main;

export default mainSlice.reducer;
