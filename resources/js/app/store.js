import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import mainReducer from "../features/mainSlice";
import valueReducer from "../features/valueSlice";

export default configureStore({
    reducer: {
        main: mainReducer,
        data: dataReducer,
        value: valueReducer,
    },
});
