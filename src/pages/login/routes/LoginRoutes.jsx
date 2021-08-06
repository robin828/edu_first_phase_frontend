import React from 'react'
import { loginRoutes } from './routes'
import { studentRoutes } from '../../Student/routes/routes'
import Header from '../../Student/component/Header'
import TeacherHeader from '../../Teacher/components/TeacherHeader'
import { Route, Redirect } from 'react-router-dom'
import { teacherRoutes } from '../../Teacher/routes/routes'
import { useSelector } from 'react-redux'
import { Suspense } from 'react'
import UserLogin from './UserLogin'
import Loader from '../../common/Loader';
const LoginRoutes = () => {
    const header = useSelector((state) => state.userLogin.header)
    return (
        <>
        <Suspense fallback={<div style={{textAlign: 'center'}}><Loader/></div>}>
            {loginRoutes.map((route) => (
                //     <Suspense fallback={<div>Loading...</div>}>
                //     <Route
                //         key={route.path}
                //         exact
                //         component={route.component}
                //         path={route.path}
                //     />
                //   </Suspense>
                
                <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                />
            ))
            }
            <Route exact path="/user/login" component={UserLogin} />
            {localStorage.getItem('studentUsername') && header &&  <Header />}
            { localStorage.getItem('studentUsername') && studentRoutes.map((route) => (
                <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                />
            ))
            }
            {/* {localStorage.getItem('studentUsername') && <Route path="*">
                <Redirect to="/student/dashboard" />
            </Route>} */}
            {localStorage.getItem('teacherUserName') && header && <>
                <TeacherHeader />
            {teacherRoutes.map((route) => (
                <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                />
            ))}</>}
            </Suspense>
        </>
    )
}

export default LoginRoutes
