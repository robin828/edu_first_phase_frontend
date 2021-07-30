// import Login from '../Login';
import React from 'react';

const Login = React.lazy(() => import('../Login'));


export const loginRoutes = [
    {
        path: "/",
        component: Login 
    },
    {
        path: "/login",
        component: Login 
    },
]