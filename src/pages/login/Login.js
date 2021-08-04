import React, { useState } from "react";
import theme from "../../ui/theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import schoolImage from "../../img/school image.jpeg";
import teacher from "../../img/teacher.svg";
import student from "../../img/student.svg";
import CardComponent from './CardComponent';
import ModelComponent from './LoginModel';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  schoolName: {
    marginTop: "1rem",
    fontWeight: 800,
    fontSize: "3.75rem",
    color: "white",
  },
  schoolImage: {
    marginTop: "2rem",
  },
  help: {
    color: "white",
    fontWeight: 800,
  },
  loginGrid: {
    marginTop: "2rem",
    paddingBottom: ".5rem",
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
  },
  cardComp: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: '.5rem'
    },
    margin: '10px',
    border: 'red 2px solid'
  }
});

function Login() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const history = useHistory();


  return (
    <>
    <div
      style={{
        background:
          "linear-gradient(to right, #f4a261, #f2995d, #f08f59, #ee8656, #eb7c53, #eb7f52, #ea8251, #ea8550, #eb9552, #eba557, #eab55f, #e9c46a)",
        height: 'max-content',
        minHeight: '100vh'
      }}
    >
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button disableRipple className={classes.help} variant="h6">
          Help
        </Button>
        <Divider orientation="vertical" flexItem className={classes.divider} />

        <Button disableRipple className={classes.help} variant="h6">
          Setting
        </Button>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <img
            alt={schoolImage}
            className={classes.schoolImage}
            src={schoolImage}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.schoolName}>Online Edu</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.loginGrid}
      >
        <CardComponent className={classes.cardComp} image={teacher} userDetail={"Teacher"} setOpen={setOpen} setUser={setUser} />
        <CardComponent className={classes.cardComp} image={student} userDetail={"Student"} setOpen={setOpen} setUser={setUser} />
      </Grid> 
      <div style={{border: 'red'}} >
      <ModelComponent open={open} setOpen={setOpen} user={user} />

      </div>
    </div>
    </>
  );
}

export default Login;

