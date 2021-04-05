import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import mainReducer from "../features/mainSlice";

export default configureStore({
    reducer: {
        main: mainReducer,
        data: dataReducer
    },
});
