import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./features/settings/settingsSlice";
import statisticsSlice from "./features/statistics/statisticsSlice";




export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        statistics: statisticsSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch