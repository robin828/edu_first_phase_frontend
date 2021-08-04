import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const studentLoginApi = createAsyncThunk('student/loginApi', async (data) => {
    return await Axios.post('http://localhost:9000/api/student/login', data);
    // return await Axios.post('https://api.myonlineedu.in/api/student/login', data);
    // return await Axios.post('https://www.myonlineedu.in/api/student/login', data);
})
export const teacherLoginApi = createAsyncThunk('teacher/teacherLoginSlice', async (data) => {
    return await Axios.post('https://localhost:9000/api/teacher/login', data);
    // return await Axios.post('https://api.myonlineedu.in/api/teacher/login', data);
    // return await Axios.post('https://www.myonlineedu.in/api/teacher/login', data);
})
// export const getStudentData = createAsyncThunk('student/studentData', async(data) => {
//     // return await Axios.post('https://localhost:9000/api/student/data', data);
//     return await Axios.post('https://api.myonlineedu.in/api/student/data', data);
//     // return await Axios.post('https://www.myonlineedu.in/api/student/data', data);
// })
// export const getTeacherData = createAsyncThunk('teacher/teacherData', async(data) => {
//     // return await Axios.post('https://localhost:9000/api/teacher/data', data);
//     return await Axios.post('https://api.myonlineedu.in/api/teacher/data', data);
//     // return await Axios.post('https://www.myonlineedu.in/api/teacher/data', data);
// })
