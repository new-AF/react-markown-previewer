import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
    reducer: {
        "text-slice": slice,
    },
});

export default store;
