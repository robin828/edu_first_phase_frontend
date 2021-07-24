import React from 'react'
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';

const Setting = () => {
    const history = useHistory();

    
    const handleClick = () => {
        localStorage.clear('studentId')
        console.log("Button Clicked");
        history.push('/')
    }

    return (
        <div>
            <Button onClick={handleClick} >
                Logout
            </Button>
        </div>
    )
}

export default Setting
