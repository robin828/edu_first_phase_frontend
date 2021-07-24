import StudentRoutes from '../pages/Student/routes/StudentRoutes';
import TeacherRoutes from '../pages/Teacher/routes/TeacherRoutes';
import LoginRoutes from '../pages/login/routes/LoginRoutes';
import { useSelector } from 'react-redux';
import { useHistory, useLocation, Switch } from 'react-router-dom'

import React from 'react'

const MainRoutes = () => {
    const history = useHistory();
    const location = useLocation();

    useSelector((state) => {
        if (Object.keys(state.userLogin.login).length !== 0) {
            localStorage.setItem('studentToken', state.userLogin.login.token);
            localStorage.setItem('studentId', state.userLogin.login.userName);
            console.log("1234567890")
            localStorage.setItem('schoolName', state.userLogin.login.schoolName);
            localStorage.setItem('teacherToken', "");
            console.log("After")
            history.push('/student/dashboard');
        }
        if (Object.keys(state.teacherLogin.login).length !== 0) {
            localStorage.setItem('teacherToken', state.teacherLogin.login.token);
            localStorage.setItem('teacherId', state.teacherLogin.login.existingTeacher);
            localStorage.setItem('schoolName', state.teacherLogin.login.schoolName)
            localStorage.setItem('studentToken', "");
            console.log("#######teacher#########")
            history.push('/teacher/dashboard');
        }
    });
    return (
        <>
        <Switch location={location} >
        <StudentRoutes />  
        <TeacherRoutes />
        <LoginRoutes />

        </Switch>
        </>
    );
};

export default MainRoutes;
