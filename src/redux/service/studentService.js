import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStudentDashboard = async () => {
    return await Axios.get(`https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/dashboard?userName=${localStorage.getItem('studentUsername')}`);
}
export const getStudentTopCard = async () => {
    return await Axios.get(`https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/gettopcard?userName=${localStorage.getItem('studentUsername')}`);
}

export const getStudentClass = createAsyncThunk('student/studentClass', async (data) => {
    return await Axios.post('https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/class', data);
})
export const getExam = async (className) => {
    return await Axios.get(`https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/getexam?className=${className}`);
}
export const getChapters = async (subjectName) => {
    return await Axios.get(`https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/getchapter?subjectName=${subjectName}`);
}
export const getResults = async () => {
    return await Axios.get(`https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/getresults?userName=${localStorage.getItem('studentUsername')}`);
}
export const getTeacherQuestions = async () => {
    return await Axios.get(`https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/teacher/question?userName=${localStorage.getItem('studentUsername')}`);
}

export const getChapterWisePerformance = async ({selectedChapter, selectedExam, selectedSubject}) => {
    return await Axios.get(`https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/performance/chapterwise?userName=${localStorage.getItem('studentUsername')}&exam=${selectedExam}&subject=${selectedSubject}&chapter=${selectedChapter}`);
}

export const getQuestions = createAsyncThunk('student/question', async (data) => {
    console.log(data, 'data')
    return await Axios.post('https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/question', data);
})

export const getQuestionBy_id = createAsyncThunk('student/question', async (data) => {
    console.log(data, 'data')
    return await Axios.post('https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/result/question', data);
})



export const saveResult = createAsyncThunk('student/question', async (data) => {
    console.log(data, 'data')
    return await Axios.post('https://eduprodfirstphasebackend-env.eba-fi5wgagu.us-east-1.elasticbeanstalk.com/api/student/saveresult', data);
})
