import { createSlice } from "@reduxjs/toolkit";


type initialStateProps = {
    isOpen: Boolean
}

const initialState: initialStateProps = {
    isOpen: false
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        openSettings: (state) => {
            state.isOpen = true
        },
        closeSettings: (state) => {
            state.isOpen = false
        }
    }
})


export const { openSettings, closeSettings } = settingsSlice.actions
export default settingsSlice.reducer