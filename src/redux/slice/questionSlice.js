import {createSlice} from '@reduxjs/toolkit';
import { getQuestions } from '../service/studentService'

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        question: {},
        loading: true,
        error:"",
        noOfQuestion: 0
    },
    reducers: {
        setNoOfQuestions: (state, action) => {
            console.log(action, 'action')
            state.noOfQuestion = action.payload;
        }

    },
    extraReducers:(builder) => {
        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.question = {...action.payload.data};
            console.log(action.payload.data)
            state.loading = action.payload.data
        })
        builder.addCase(getQuestions.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getQuestions.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

export const {setNoOfQuestions} = questionSlice.actions