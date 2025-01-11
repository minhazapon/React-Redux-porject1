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
        },
        {
            id: "AACCS",
            title: "Next.js Project",
            description: " next.s is the best frontend tech ",
            dueTime: "2013",
        }
    ]
}

const taskSlice = createSlice({
    name: "WorkTask",
    initialState,
    reducers: {}
})
export default taskSlice.reducer;