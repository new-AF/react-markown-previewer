import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
import countReducer from "./Components/Editor/Count.slice";

const store = configureStore({
    reducer: {
        "text-slice": slice,
        "count-reducer": countReducer,
    },
});

export default store;
