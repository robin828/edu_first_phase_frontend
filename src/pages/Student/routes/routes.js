// import Dashboard from "../Dashboard";
// import Performance from "../Performance";
// import Homework from "../Homework";
// import Leaderboard from "../Leaderboard";
// import Setting from '../Setting';
// import Practice from "../Practice";
import React from 'react';
import { lazy } from 'react';

const Dashboard = lazy(() => import('../Dashboard'));
const Performance = lazy(() => import('../Performance'));
const Homework = lazy(() => import('../Homework'));
const Leaderboard = lazy(() => import('../Leaderboard'));
const Setting = lazy(() => import('../Setting'));
const Practice = lazy(() => import('../Practice'));
const Test = lazy(() => import('../Test'));


export const studentRoutes = [
    {
        path: "/student/dashboard",
        component: Dashboard 
    },
    {
        path: "/student/performance",
        component: Performance 
    },
    {
        path: "/student/homework",
        component: Homework 
    },
    {
        path: "/student/leaderboard",
        component: Leaderboard 
    },
    {
        path: "/student/practice",
        component: Practice 
    },
    {
        path: "/student/test",
        component: Test 
    },
    {
        path: '/student/setting',
        component: Setting
    }
]