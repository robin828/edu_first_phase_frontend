import {createSlice} from '@reduxjs/toolkit';
import { getTeacherData } from '../service/loginService'

export const teacherDataSlice = createSlice({
    name: 'teacher',
    initialState: {
        standard: {},
        loading: true,
        error:"",
    },
    reducers: {

    },
    extraReducers:(builder) => {
        builder.addCase(getTeacherData.fulfilled, (state, action) => {
            console.log(state)
            console.log("state")

            state.login = {...action.payload.data};
        })
        builder.addCase(getTeacherData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getTeacherData.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})