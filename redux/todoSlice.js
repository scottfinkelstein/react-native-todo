import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskItems: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, payload) => {
            state.taskItems.push(payload.payload)
            console.log(payload.payload);
        },
        deleteTask: (state, payload) => {
           state.taskItems.splice(payload.payload, 1);
        }
    }
})

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;