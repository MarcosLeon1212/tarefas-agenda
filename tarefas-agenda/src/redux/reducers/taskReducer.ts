import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: number;
    title: string;
    body: string;
}

interface TaskState {
    tasks: Task[];
    nextId: number;
}

const initialState: TaskState = {
    tasks: [],
    nextId: 1,
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ title: string; body: string }>) => {
            const newTask: Task = {
                id: state.nextId,
                title: action.payload.title,
                body: action.payload.body,
            };
            state.tasks.push(newTask);
            state.nextId += 1;
        },
        excludeTask: (state, action: PayloadAction<{ id: number }>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },
    }
});

export const { addTask, excludeTask } = taskSlice.actions;
export default taskSlice.reducer;
