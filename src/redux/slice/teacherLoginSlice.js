import {createSlice} from '@reduxjs/toolkit';
import { teacherLoginApi } from '../service/loginService'

export const teacherLoginSlice = createSlice({
    name: 'teacher',
    initialState: {
        login: {},
        loading: true,
        error:"",
    },
    reducers: {

    },
    extraReducers:(builder) => {
        builder.addCase(teacherLoginApi.fulfilled, (state, action) => {
            console.log(action.payload.data, '123456789')
            state.login = {...action.payload.data};
            localStorage.setItem('auth_token', state.login.token)
        })
        builder.addCase(teacherLoginApi.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(teacherLoginApi.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})