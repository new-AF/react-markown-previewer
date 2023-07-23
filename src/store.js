import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
import countReducer from "./Components/Editor/Count.slice";
import editReducer from "./Components/Editor/Edit.slice";

const store = configureStore({
    reducer: {
        "text-slice": slice,
        "count-reducer": countReducer,
        edit: editReducer,
    },
});

export default store;
