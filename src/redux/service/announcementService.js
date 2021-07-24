import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendAnnouncement = createAsyncThunk(async (data) => {
    console.log("data")
    return await Axios.post('http://localhost:9000/api/teacher/announcement', data);
})
export const getAnnouncement = createAsyncThunk('announcment/getAnnouncementSlice', async (data) => {
    console.log("data")
    return await Axios.post('http://localhost:9000/api/student/announcement', data);
})

