import { createSlice } from "@reduxjs/toolkit";

/* state */
const initialState = {
    scrollTop: 0,
};

const slice = createSlice({
    name: "count",
    initialState: initialState,
    reducers: {
        set_scroll_top: (state, action) => {
            const y = action.payload;
            state.scrollTop = y;
        },
    },
});

// const Actions = slice.actions;
// export { Actions };
export const { set_scroll_top } = slice.actions;
export default slice.reducer;
