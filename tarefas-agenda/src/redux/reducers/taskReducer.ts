import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'task',
    initialState: {
        title: 'TESTE',
        body: 'Ir pra academia'
    },

    reducers:{
        setTitle: (state, action) =>{
            state.title = action.payload;
        },

        setBody: (state, action) => {
                state.body = action.payload;
        }
    }
});

export const {setTitle, setBody} = slice.actions;
export default slice.reducer;