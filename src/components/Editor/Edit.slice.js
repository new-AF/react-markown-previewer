import { createSlice } from "@reduxjs/toolkit";

/* state */
const initialState = {
    fontSize: 16,
};

const slice = createSlice({
    name: "edit",
    initialState: initialState,
    reducers: {
        set_font_size: (state, action) => {
            const size = action.payload;
            state.fontSize = size;
        },
    },
});

export const { set_font_size } = slice.actions;
export default slice.reducer;
