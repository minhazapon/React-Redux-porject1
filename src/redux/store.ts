import { configureStore } from "@reduxjs/toolkit";
import counterRducer from "./CounterSlice"


export const store = configureStore({
    reducer: {
        counter: counterRducer
    }
})

export type rootState = ReturnType<typeof store.getState>