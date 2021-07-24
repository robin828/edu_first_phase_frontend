import {createSlice} from '@reduxjs/toolkit';
import { getStudentData } from '../service/loginService'

export const studentDataSlice = createSlice({
    name: 'student',
    initialState: {
        login: {},
        loading: true,
        error:"",
    },
    reducers: {

    },
    extraReducers:(builder) => {
        builder.addCase(getStudentData.fulfilled, (state, action) => {
            state.login = {...action.payload.data};
        })
        builder.addCase(getStudentData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getStudentData.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})