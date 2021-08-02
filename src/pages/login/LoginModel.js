/*eslint-disable*/

import React, { useState } from 'react'
import theme from "../../ui/theme";
import indiaflag from "../../img/indiaflag.svg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import crossbutton from "../../img/crossbutton.svg";
import Grid from "@material-ui/core/Grid";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { studentLoginApi, teacherLoginApi } from '../../redux/service/loginService';
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles({
    paper: {
        position: "absolute",
        width: 300,
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    crossButton: {
        alignItems: "flex-end",
    },
    india: {
        marginLeft: "0.7rem",
        fontSize: "20px",
    },
    texts: {
        marginTop: "0.7rem",
        marginBottom: "1rem",
    },
    buttons: {
        marginTop: "1rem",
        background: "#264653",
    },
})

const LoginModel = ({ open, setOpen, user }) => {
    const classes = useStyles();
    const history = useHistory();
    const [modalStyle] = React.useState(getModalStyle);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    console.log(history.length)

    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (user === "Student") {
            dispatch(studentLoginApi({ userName, password }));
            localStorage.setItem('studentUsername', userName);
            history.push('/student/dashboard');
        }
        if (user === "Teacher") {
            dispatch(teacherLoginApi({ userName, password }));
            localStorage.setItem('teacherUserName', userName);
            history.push('/teacher/dashboard')
        }
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
            >
                <Grid item>
                    <img
                        src={crossbutton}
                        alt={crossbutton}
                        className={classes.crossButton}
                        onClick={() => setOpen(false)}
                    />
                </Grid>
            </Grid>
            <Grid container direction="column" justify="space-evenly">
                <Grid item className={classes.texts}>
                    <Typography variant="h3">Login</Typography>
                </Grid>
                {/* <Grid container direction="row">
                    <Grid item>
                        <img src={indiaflag} alt-={indiaflag} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.india}>India</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography className={classes.texts}>Phone Number</Typography>
                </Grid> */}
                <Grid item>
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        placeholder="Username"
                        rowsMax={4}
                        value={userName}
                        onChange={handleUserName}
                    />
                    <br />
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        type="password"
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
                        onClick={handleSubmit}
                        variant="contained"
                        className={classes.buttons}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

export default LoginModel
