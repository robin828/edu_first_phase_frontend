import React from 'react'
import { loginRoutes } from './routes'
import { studentRoutes } from '../../Student/routes/routes'
import Header from '../../Student/component/Header'
import TeacherHeader from '../../Teacher/components/TeacherHeader'
import { Route } from 'react-router-dom'
import { teacherRoutes } from '../../Teacher/routes/routes'
import { useSelector } from 'react-redux'
import { Suspense } from 'react'

const LoginRoutes = () => {
    const header = useSelector((state) => state.userLogin.header)
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
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
            ))}
            {localStorage.getItem('studentUsername') && header && <Header />}
            {studentRoutes.map((route) => (
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

                    // render={() => <Suspense fallback={<div>loading ...</div>} > <route.component /> </Suspense>}

                    // component={route.component}
                    path={route.path}
                />
            ))}
            {localStorage.getItem('teacherUserName') && header && (
                <TeacherHeader />
            )}
            {teacherRoutes.map((route) => (
                <Route
                    key={route.path}
                    exact
                    component={route.component}
                    path={route.path}
                />
            ))}
            </Suspense>
        </>
    )
}

export default LoginRoutes
