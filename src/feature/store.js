import { configureStore } from '@reduxjs/toolkit'
import colorActiveSlice from "./services/colorActiveSlice"
import scrollingSlice from './services/scrollingSlice'

export const store = configureStore({
    reducer:{
        colorActive: colorActiveSlice,
        scrolling: scrollingSlice
    }
})