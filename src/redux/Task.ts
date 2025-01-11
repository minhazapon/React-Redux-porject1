import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRoot } from "./type";

interface ISK {
    task: TRoot[]
}

const initialState: ISK = {
    task: []
}

const taskSlice = createSlice({
    name: "WorkTask",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TRoot>) => {
            state.task.push(action.payload)
        }
    }
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer;