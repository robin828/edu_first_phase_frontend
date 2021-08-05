import React from 'react'
import { useHistory } from 'react-router'
const UserLogin = () => {
    const history = useHistory();
    setTimeout(() => {
        if(localStorage.getItem('studentUsername')) {
            history.push('/student/dashboard');
        }
        else {
            alert('Wrong id and password');
            history.push('/')
        }
    }, 2000);
    return (
        <div>
           Loading.... 
        </div>
    )
}

export default UserLogin
