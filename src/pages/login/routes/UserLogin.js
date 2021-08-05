import React from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux';
const UserLogin = () => {
    const history = useHistory();
    const loggedIn = useSelector((state)=>state.login.loggedIn)
    // React.useEffect(()=>{÷
    // setTimeout(() => {
    //     if(localStorage.getItem('studentUsername')) {
    //         history.push('/student/dashboard');
    //     }
    //     else {
    //         alert('Wrong id and password');
    //         history.push('/')
    //     }
    // }, 2000);
    if(loggedIn) history.push('/student/dashboard');
    return (
        <div>
           Loading.... 
        </div>
    )
}

export default UserLogin
