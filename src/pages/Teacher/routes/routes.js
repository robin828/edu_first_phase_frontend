import Homework from "../Homework";
import Dashboard from "../Dashboard";
import Performance from "../Performance";

export const teacherRoutes = [
    {
        path: "/teacher/dashboard",
        component: Dashboard 
    },
    {
        path: "/teacher/homework",
        component: Homework  
    },
    {
        path: "/teacher/performance",
        component: Performance 
    },
    
]
