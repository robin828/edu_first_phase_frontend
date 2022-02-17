import React, { useState } from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../../ui/theme'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import { studentLoginApi, teacherLoginApi } from '../../redux/service/loginService';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Axios from 'axios'
import Loader from '../common/Loader'

const useStyles = makeStyles({
    root: {
        width: 350,
        textAlign: 'center',
        borderRadius: '35px',
        border: '3px red',
        [theme.breakpoints.down('md')]: {
            width: 280,
        },
        [theme.breakpoints.down('xs')]: {
            width: 210,
        },
    },
    teacherAvatar: {
        marginTop: '1.4rem',
        marginLeft: '1.5rem',
        marginBottom: '1rem',
        textAlign: 'center',
        height: '4rem',
        width: '4rem',
        [theme.breakpoints.down('md')]: {
            height: '3.7rem',
            width: '3.7rem',
            marginTop: '1.1rem',
            marginLeft: '1.1rem',
            marginBottom: '.8rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '3rem',
            width: '3rem',
            marginTop: '1.1rem',
            marginLeft: '1.1rem',
            marginBottom: '.7rem',
        },
        teacherText: {
            color: '#264653',
            fontWeight: 800,
            marginLeft: '.8rem',
        },
		buttons: {
			marginTop: "1rem",
			background: "#264653",
		},
    },
})

const CardComponent = ({ image, userDetail, setOpen, setUser }) => {
    const classes = useStyles()
    const [checking, setChecking] = useState(false)
    const [value, setValue] = useState()
    const [haveInstitute, setHaveInstitute] = useState(false)
	const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // console.log(history.length)

    const dispatch = useDispatch();
    
	const handleSubmit = () => {
        // if (user === "Student") {
            if(userName != '' && password !='' ) {
                dispatch(studentLoginApi({ userName, password }));
                // localStorage.setItem('studentUsername', userName);
                history.push('/user/login');
            }
            else {
                alert('Mandatory field are empty')
            }
        // }
        // if (user === "Teacher") {
        //     dispatch(teacherLoginApi({ userName, password }));
        //     localStorage.setItem('teacherUserName', userName);
        //     history.push('/teacher/dashboard')
        // }
    };

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClick = () => {
        // const url = "http://localhost:9000/api/checkschool"
        const url = "https://api.myonlineedu.in/api/checkschool"
        setChecking(true)
        // alert('OP')
        Axios.post(url, {
            schoolName: value,
        }).then((res) => {
            // alert(res.data)
            if (res.data) {
                setHaveInstitute(true)
            }
            setChecking(false)
        })
    }

    return (
        <Paper className={classes.root}>
            {/* <CardActionArea> */}
            <Avatar
                disableRipple
                className={classes.teacherAvatar}
                variant="square"
                alt={image}
                src={image}
            />
            {true ? (
                <Grid container direction="column" alignContent="center" justify="space-evenly">
                    <Grid item>
                        <Typography className={classes.teacherText}>Enter Your Credentials</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="username"
                            // multiline
                            placeholder="Username"
                            style={{margin:'1.1rem'}}
                            rowsMax={4}
                            value={userName}
                            onChange={handleUserName}
                        />
                        {/* <br /> */}
                        <TextField
                            id="password"
                            // multiline
                            name='password'
                            type="password"
							// style={{margin:'1.1rem'}}
                            rowsMax={4}
                            placeholder="Password"
                            value={password}
                            onChange={handlePassword}
                        />
                        <br />
                    </Grid>
                    <Grid item>
                        <Button
                            type="submit"
                            style={{margin:'0.5rem'}}
                            onClick={handleSubmit}
                            variant="contained"
                            className={classes.buttons}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            ) : (
                <CardContent className={classes.teacherText}>
                    <Typography className={classes.teacherText}>
                        Enter your Institute Name
                    </Typography>
                    <TextField
                        id="standard-basic"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        label="Institute Name"
                        variant="standard"
                    />
                    {checking ? (
                        <Loader />
                    ) : (
                        <IconButton onClick={handleClick}>
                            <ArrowForwardIcon />
                        </IconButton>
                    )}
                </CardContent>
            )}
            {/* </CardActionArea> */}
        </Paper>
    )
}

export default CardComponent
