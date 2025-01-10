import { configureStore } from "@reduxjs/toolkit";
import counterRducer from "./CounterSlice"
import TaskSlice from "./Task"


export const store = configureStore({
    reducer: {
        counter: counterRducer,
        taskZ: TaskSlice,
    }
})

export type rootState = ReturnType<typeof store.getState>