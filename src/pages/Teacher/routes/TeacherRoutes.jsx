import React from 'react'
import Header from '../components/header/Header'
import { teacherRoutes } from "./routes";
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom';

const TeacherRoutes = () => {
    const location = useLocation();
    return (
        <>  
            {teacherRoutes.map((route, index) => (
                <Route key={route.path} exact component={route.component} path={route.path} />
            ))}
        </>
    )
}

export default TeacherRoutes
