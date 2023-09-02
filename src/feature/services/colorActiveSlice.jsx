import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : "deepPurple"
}

export const colorActiveSlice = createSlice({
    name: "colorActive",
    initialState,
    reducers: {
        changeColorActive: (state , {payload}) => {
            state.value = payload
        }
    }
})

export const { changeColorActive } = colorActiveSlice.actions

export default colorActiveSlice.reducer