import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: {
            LeftContent: {
                aktif: false,
                filters: [
                    {
                        nama: "",
                        data: [],
                    },
                ],
            },
        },
    },
    reducers: {
        setleftContent: (state, action) => {
            state.data.LeftContent = action.payload;
        },
        setLeftContentFilters: (state, action) => {
            state.data.LeftContent.filters = action.payload;
        },
    },
});

export const { setleftContent } = dataSlice.actions;

export const selectLeftContent = (state) => state.data.data.LeftContent;

export default dataSlice.reducer;
