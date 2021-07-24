import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getStudentDashboard = async () => {
    return await Axios.get(`http://localhost:9000/api/student/dashboard?userName=${localStorage.getItem('studentUsername')}`);
}
export const getStudentTopCard = async () => {
    return await Axios.get(`http://localhost:9000/api/student/gettopcard?userName=${localStorage.getItem('studentUsername')}`);
}

export const getStudentClass = createAsyncThunk('student/studentClass', async (data) => {
    return await Axios.post('http://localhost:9000/api/student/class', data);
})
export const getExam = async (className) => {
    return await Axios.get(`http://localhost:9000/api/getexam?className=${className}`);
}
export const getChapters = async (subjectName) => {
    return await Axios.get(`http://localhost:9000/api/getchapter?subjectName=${subjectName}`);
}
export const getResults = async () => {
    return await Axios.get(`http://localhost:9000/api/student/getresults?userName=${localStorage.getItem('studentUsername')}`);
}
export const getTeacherQuestions = async () => {
    return await Axios.get(`http://localhost:9000/api/student/teacher/question?userName=${localStorage.getItem('studentUsername')}`);
}

export const getChapterWisePerformance = async ({selectedChapter, selectedExam, selectedSubject}) => {
    return await Axios.get(`http://localhost:9000/api/student/performance/chapterwise?userName=${localStorage.getItem('studentUsername')}&exam=${selectedExam}&subject=${selectedSubject}&chapter=${selectedChapter}`);
}

export const getQuestions = createAsyncThunk('student/question', async (data) => {
    console.log(data, 'data')
    return await Axios.post('http://localhost:9000/api/student/question', data);
})

export const getQuestionBy_id = createAsyncThunk('student/question', async (data) => {
    console.log(data, 'data')
    return await Axios.post('http://localhost:9000/api/student/result/question', data);
})



export const saveResult = createAsyncThunk('student/question', async (data) => {
    console.log(data, 'data')
    return await Axios.post('http://localhost:9000/api/student/saveresult', data);
})
