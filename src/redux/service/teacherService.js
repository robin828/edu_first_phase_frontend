import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getTeacherDashboard = (body) => {
//     console.log(body);
// }
const headers = { 
    'auth_token': localStorage.getItem('auth_token'),
};
export const getTeacherDashboard = async (body) => {
    console.log(body.userName, '&&&&)')
    return await Axios.get(`http://localhost:9000/api/teacher/dashboard?userName=${body.userName}`, {
        headers: {
            'auth_token': localStorage.getItem('auth_token')
          }
    });
}

// export const assignQuestionsToStudents = async (body) => {
//     console.log(body, "@@##");
//     console.log("hii")
//     return await Axios.put(`http://localhost:9000/api/teacher/assign`, body, {headers})
// }



export const assignQuestionsToStudents = createAsyncThunk('teacher/assign', async (data) => {
    console.log(data, 'data')
    return await Axios.put(`http://localhost:9000/api/teacher/assign`, data, {headers})
})
