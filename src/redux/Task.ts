import { createSlice } from "@reduxjs/toolkit";
import { TRoot } from "./type";

interface ISK {
    task: TRoot[]
}

const initialState: ISK = {
    task: [

        {
            id: "AABB",
            title: "FrontEnd Project",
            description: " react.s is the best frontend tech ",
            dueTime: "2013",
            isComleted: true
        }
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})
export default taskSlice.reducer;