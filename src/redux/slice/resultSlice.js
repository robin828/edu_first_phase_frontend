import {createSlice} from '@reduxjs/toolkit';
import { getQuestionBy_id } from '../service/studentService'

export const resultSlice = createSlice({
    name: 'result',
    initialState: {
        resultQuestions: {},
        loading: true,
        error:"",
    },
    reducers: {
    },
    extraReducers:(builder) => {
        builder.addCase(getQuestionBy_id.fulfilled, (state, action) => {
            state.resultQuestions = {...action.payload.data};
            console.log(action.payload.data, '}}{{{')
            state.loading = action.payload.data
        })
        builder.addCase(getQuestionBy_id.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getQuestionBy_id.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

