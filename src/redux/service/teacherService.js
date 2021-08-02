/*eslint-disable*/
import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getTeacherDashboard = (body) => {
//     console.log(body);
// }
const headers = { 
    'auth_token': localStorage.getItem('auth_token'),
};
export const getTeacherDashboard = async (body) => {
    // return await Axios.get(`http://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/teacher/dashboard?userName=${body.userName}`, {
    //     headers: {
    //         'auth_token': localStorage.getItem('auth_token')
    //       }
    // });
    return await Axios.get(`http://localhost:9000/api/teacher/dashboard?userName=${body.userName}`, {
        headers: {
            'auth_token': localStorage.getItem('auth_token')
          }
    });
}

// export const assignQuestionsToStudents = async (body) => {
//     console.log(body, "@@##");
//     console.log("hii")
//     return await Axios.put(`http://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com//api/teacher/assign`, body, {headers})
// }



export const assignQuestionsToStudents = createAsyncThunk('teacher/assign', async (data) => {
    // console.log(data, 'data')
    // return await Axios.put(`http://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/teacher/assign`, data, {headers})
    return await Axios.put(`http://localhost:9000/api/teacher/assign`, data, {headers})
})

export const getStudentOfTeacher = async (data) => {
    const {className, userName} = data;
    // return await Axios.put(`http://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/teacher/assign`, data, {headers})
    return await Axios.get(`http://localhost:9000/api/teacher/allstudent?className=${className}&userName=${userName}`)
}
export const getStudentResult = async (data) => {
    const {userName, teacherUserName, subject, chapter} = data;
    // return await Axios.put(`http://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/teacher/assign`, data, {headers})
    return await Axios.get(`http://localhost:9000/api/teacher/student/result?userName=${userName}&selectedSubjects=${subject}&selectedChapter=${chapter}`)
}
export const getStudentSubject = async (data) => {
    const {userName} = data;
    // return await Axios.put(`http://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/teacher/assign`, data, {headers})
    return await Axios.get(`http://localhost:9000/api/teacher/student/subject?userName=${userName}`)
}
