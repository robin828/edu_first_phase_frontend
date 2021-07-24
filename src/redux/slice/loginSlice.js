import {createSlice} from '@reduxjs/toolkit';
import { studentLoginApi } from '../service/loginService'

export const loginSlice = createSlice({
    name: 'student',
    initialState: {
        login: {},
        header: true,
        loading: true,
        error:"",
    },
    reducers: {
         showHeader: (state) => {
            state.header=true
         },
         removeHeader: (state) => {
            console.log("Heser")
            state.header=false
         }
    },
    extraReducers:(builder) => {
        builder.addCase(studentLoginApi.fulfilled, (state, action) => {
            state.login = {...action.payload.data};
            localStorage.setItem('S_auth_token', state.login.token)
        })
        builder.addCase(studentLoginApi.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(studentLoginApi.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

export const { showHeader, removeHeader } = loginSlice.actions