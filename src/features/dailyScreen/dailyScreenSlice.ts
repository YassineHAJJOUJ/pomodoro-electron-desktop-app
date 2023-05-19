import { createSlice } from "@reduxjs/toolkit";


enum timerTypes {
    POMODORO,
    LONG_BREAK,
    SHORT_BREAK
}


const initialState: any = {
    timer: {
        timerType: timerTypes.POMODORO,
        totalTimeBySec: 36000,
        currentTimeBySec: 400,
        currentTask: 2
    },
    todayTasks: {
        list: [
            {
                id: 1,
                task: "creating a landing page",
                tag: 2,
                estimatedPomodoros: 4,
                donePomodoros: 1,

            },
            {
                id: 2,
                task: "creating a landing page",
                tag: 2,
                estimatedPomodoros: 4,
                donePomodoros: 1,

            },
            {
                id: 3,
                task: "creating a landing page",
                tag: 2,
                estimatedPomodoros: 4,
                donePomodoros: 1,

            },
            {
                id: 4,
                task: "creating a landing page",
                tag: 2,
                estimatedPomodoros: 4,
                donePomodoros: 1,

            },
        ]
    }
}


const dailyScreenSlice = createSlice({
    name: "dailyScreen",
    initialState,
    reducers: {
        actionOne: (state) => {
            state.timer = state.timer
        },
        actionTwo: (state) => {
            state.timer = state.timer
        },
    }
})




export const { actionOne, actionTwo } = dailyScreenSlice.actions
export default dailyScreenSlice.reducer

