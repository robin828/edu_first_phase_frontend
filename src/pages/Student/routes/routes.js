import Dashboard from "../Dashboard";
import Performance from "../Performance";
import Homework from "../Homework";
import Leaderboard from "../Leaderboard";
import Setting from '../Setting';
import Practice from "../Practice";

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
        path: '/student/setting',
        component: Setting
    }
]