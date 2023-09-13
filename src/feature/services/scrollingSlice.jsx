import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const scrollingSlice = createSlice({
    name: "scrolling",
    initialState,
    reducers: {
        trackingScroll: (state, { payload }) => {
            state.value = payload
        }
    }
})

export const {trackingScroll} = scrollingSlice.actions

export default scrollingSlice.reducer