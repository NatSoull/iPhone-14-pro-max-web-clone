import { configureStore } from '@reduxjs/toolkit'
import colorActiveSlice from "./services/colorActiveSlice"

export const store = configureStore({
    reducer:{
        colorActive: colorActiveSlice
    }
})