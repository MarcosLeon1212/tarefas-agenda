import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: any;
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
        
        setId: (state, action: PayloadAction<{index: number, title: string, body: string}>) => {
            state.tasks[action.payload.index].id = action.payload.index;
        },
        
        setTitle: (state, action: PayloadAction<{ index: number; title: string }>) => {
            state.tasks[action.payload.index].title = action.payload.title;
        },

        setBody: (state, action: PayloadAction<{ index: number; body: string }>) => {
            state.tasks[action.payload.index].body = action.payload.body;
        },

        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },

        excludeTask: (state, action: PayloadAction<{ id: any }>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        }
    }
});

export const { setTitle, setBody, addTask, excludeTask } = slice.actions;
export default slice.reducer;
