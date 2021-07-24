import {createSlice} from '@reduxjs/toolkit';
import { getAnnouncement } from '../service/announcementService'

export const announcementSlice = createSlice({
    name: 'announcement',
    initialState: {
        announcement: {},
        loading: true,
        error:"",
    },
    reducers: {

    },
    extraReducers:(builder) => {
        builder.addCase(getAnnouncement.fulfilled, (state, action) => {
            state.announcement = {...action.payload.data};
        })
        builder.addCase(getAnnouncement.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAnnouncement.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})