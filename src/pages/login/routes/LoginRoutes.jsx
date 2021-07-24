import React from 'react'
import { loginRoutes } from './routes'
import { studentRoutes } from '../../Student/routes/routes'
import Header from '../../Student/component/Header'
import TeacherHeader from '../../Teacher/components/TeacherHeader'
import { Route } from 'react-router-dom'
import { teacherRoutes } from '../../Teacher/routes/routes'
import { useSelector } from 'react-redux'

const LoginRoutes = () => {


    const header = useSelector((state) => state.userLogin.header)
    return (
        <>
            {loginRoutes.map((route) => (
                <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                />
            ))}
            {localStorage.getItem('studentUsername') && header && <Header />}
            {studentRoutes.map((route) => (
                <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                />
            ))}
            {localStorage.getItem('teacherUserName') && header && <TeacherHeader />}
            {teacherRoutes.map((route) => (
                <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                />
            ))}
        </>
    )
}

export default LoginRoutes
