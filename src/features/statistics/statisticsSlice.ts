import { createSlice } from "@reduxjs/toolkit";


type initialStateProps = {
    isOpen: Boolean
}

const initialState: initialStateProps = {
    isOpen: false
}

const statisticsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        openStatistics: (state) => {
            state.isOpen = true
        },
        closeStatistics: (state) => {
            state.isOpen = false
        }
    }
})


export const { openStatistics, closeStatistics } = statisticsSlice.actions
export default statisticsSlice.reducer