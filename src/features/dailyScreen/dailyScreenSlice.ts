import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export enum timerTypes {
    POMODORO,
    LONG_BREAK,
    SHORT_BREAK
}

export type timerSequenceType = {
    id: number,
    startedAt: number,
    taskId: number,
    durationBySec: number
}

export type timerType = {
    timerType: timerTypes,
    currentTimeBySec: number,
    currentTaskId: number,
    timerSequence: timerSequenceType[]
}

export type todayTaskType = {
    id: number,
    task: string,
    tag: number,
    estimatedPomodoros: number,
}


export type todayTasksType = {
    list: todayTaskType[]
}

export type tagType = {
    id: number,
    tag: string,
    color: string,
}

export type tagsType = {
    list: tagType[]
}

export type settingsTimerType = {
    pomodoroTimerBySec: number,
    shortBreakTimerBySec: number,
    longBreakTimerBySec: number,
    pomodorosAutoStart: boolean,
    breaksAutoStart: boolean
}

export type settingsSoundType = {
    tick: boolean,
    beforeBySec: number
}

export type settingsNotificationsType = {
    getNotified: boolean,
    beforeBySec: number
}

export type settingsType = {
    timer: settingsTimerType,
    sound: settingsSoundType,
    notifications: settingsNotificationsType
}

export type addEditModalContentType = {
    task: string,
    tag: number | null,
    estimatedPomodoros: number | null
}
export type addEditModalType = {
    open: boolean,
    content: addEditModalContentType
}
export type initialStateType = {
    timer: timerType,
    todayTasks: todayTasksType,
    tags: tagsType,
    settings: settingsType,
    addEditModal: addEditModalType
}

const initialState: initialStateType = {
    timer: {
        timerType: timerTypes.POMODORO,
        currentTimeBySec: 400,
        currentTaskId: 3,
        timerSequence: [
            {
                id: 1,
                startedAt: 54545485455,
                taskId: 1,
                durationBySec: 1500,
            },
            {
                id: 2,
                startedAt: 54545485455,
                taskId: 1,
                durationBySec: 1500,
            },
            {
                id: 3,
                startedAt: 54545485455,
                taskId: 1,
                durationBySec: 1500,
            },
            {
                id: 4,
                startedAt: 54545485455,
                taskId: 1,
                durationBySec: 1500,
            },
            {
                id: 5,
                startedAt: 54545485455,
                taskId: 2,
                durationBySec: 300,
            },
        ],
    },
    todayTasks: {
        list: [
            {
                id: 1,
                task: "Creating a landing page",
                tag: 1,
                estimatedPomodoros: 4
            },
            {
                id: 2,
                task: "Installing wordpress theme and adding content and images",
                tag: 1,
                estimatedPomodoros: 8

            },
            {
                id: 3,
                task: "Watch and practice the DS&A crash course on udemy",
                tag: 2,
                estimatedPomodoros: 4
            },
            {
                id: 4,
                task: "Watch andrew heberman's podcast about circadian rhythm",
                tag: 3,
                estimatedPomodoros: 5
            },
        ]
    },
    tags: {
        list: [
            {
                id: 1,
                tag: "Work",
                color: "pink",
            },
            {
                id: 2,
                tag: "Study",
                color: "blue",
            },
            {
                id: 3,
                tag: "Personal",
                color: "purple",
            },
        ]
    },
    settings: {
        timer: {
            pomodoroTimerBySec: 1500,
            shortBreakTimerBySec: 300,
            longBreakTimerBySec: 900,
            pomodorosAutoStart: false,
            breaksAutoStart: false
        },
        sound: {
            tick: true,
            beforeBySec: 5
        },
        notifications: {
            getNotified: true,
            beforeBySec: 300
        }
    },
    addEditModal: {
        open: false,
        content: {
            task: "",
            tag: null,
            estimatedPomodoros: null
        }
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
        openAddTaskModal: (state) => {
            state.addEditModal.content = { task: "", tag: null, estimatedPomodoros: null }
            state.addEditModal.open = true
        },
        // openEditTaskModal: {
        //     reducer(state, action: PayloadAction<addEditModalType>) {
        //         const { content } = action.payload;
        //         state.addEditModal.content = content
        //     },
        //     prepare(content) {
        //         return { payload: { content }}
        //     }
        // },
        openEditTaskModal: (state, action) => {
            state.addEditModal.open = true
            state.addEditModal.content = action.payload
        },
        closeAddEditTaskModal: (state) => {
            state.addEditModal.open = false
        },
    }
})


export const { actionOne, actionTwo, openAddTaskModal, openEditTaskModal, closeAddEditTaskModal } = dailyScreenSlice.actions
export default dailyScreenSlice.reducer

