import React from 'react';
import Loader from '../../common/Loader';
import { useHistory } from 'react-router';
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
    }, 3000);
    return (
        <div style={{textAlign: 'center'}} >
           <Loader />
        </div>
    )
}

export default UserLogin
