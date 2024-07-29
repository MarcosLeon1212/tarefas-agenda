import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    title: string;
    body: string;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: []
};

export const slice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<{ index: number; title: string }>) => {
            state.tasks[action.payload.index].title = action.payload.title;
        },
        setBody: (state, action: PayloadAction<{ index: number; body: string }>) => {
            state.tasks[action.payload.index].body = action.payload.body;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
    }
});

export const { setTitle, setBody, addTask } = slice.actions;
export default slice.reducer;
