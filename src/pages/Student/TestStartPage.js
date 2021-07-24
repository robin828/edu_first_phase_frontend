import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TopComponent from "./component/TopComponent";
import Homeworkcard from "./component/HomeworkCard";
import Divider from "@material-ui/core/Divider";
import header from "./component/Header";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({

    firstRow:{
        marginTop:"5rem",
        marginLeft:"5rem",
    },
    secondRow:{
        marginLeft:"20rem",
        marginTop:"5rem",
    },
    firstColumn:{
        color:"#264653",
        fontFamily: "Poppins",
        
    },
    secondColumn:{
        
        background:
      "linear-gradient(to right, #e76f51, #e76f51, #e76f51, #e76f51, #e76f51, #e87650, #e97e50, #ea8550, #eb9552, #eba557, #eab55f, #e9c46a)",
        
        paddingLeft:"1rem",
        borderRadius:6,
        boxShadow: '0 0 0 0.2rem #DCDCDC',
        color:"#ffffff",
        fontFamily:"Poppins",
        marginRight:"15rem",
    
    },
    heading:{
        
        marginBottom:"2.5rem",
    },
    heading2:{
        marginTop:"1rem",
        marginBottom:"0.5rem",
    },
    buttons:{
        marginTop:"6rem",
        background:"#F4A261",
        
      },
      paper: {
        // paddingRight: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      paper2: {
        // paddingRight: theme.spacing(0.1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      parts:{
          marginLeft:"1rem",
          marginTop:"0.5rem",
      },
      last:{
          marginTop:"1rem",
          marginLeft:"2rem",
        //   marginBottom:"2rem",
      }
}));

const TestStartPage = () => {

    const classes=useStyles();
    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs>
              <Paper className={classes.paper}>Attempted</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>Attempted</Paper>
            </Grid>
           
          </React.Fragment>
        );
      }
      function Q() {
        return (
          <React.Fragment>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper2}>1</Paper>
            </Grid>
            
          </React.Fragment>
        );
      }
    return (
        <div>
            <Divider/>  

            <Grid direction="row" container justify="flex-start" alignItems="flex-start"  >
                <Grid item className={classes.firstRow}>
                    <Grid direction="column" container justify="space-evenly" alignItems="space-evenly" className={classes.firstColumn}>
                        <Grid item >
                            <Typography variant="h3" className={classes.heading}>TEST - 1</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Number of questions : 36</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Number of questions : 80</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Negative Marks : No</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Time : 3 hours</Typography>
                        </Grid>
                        <Grid item>
                        <Button variant="contained" className={classes.buttons}>
                            Start
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item  className={classes.secondRow}>
                    <Grid direction="column" container justify="space-evenly"  className={classes.secondColumn}>
                        <Grid item >
                            <Typography variant="h5" className={classes.heading2}>TEST - 1</Typography>
                            
                        </Grid>
                        <Grid item>
                            <Typography>TEST TAKER : Rohan Sharma</Typography>
                        </Grid>
                        <Grid item>
                            
                                <Grid container xs spacing={1}>
                                    <FormRow />
                                </Grid>
                                <Grid container  xs spacing={1}>
                                    <FormRow />
                                </Grid>
                                <Grid container xs spacing={2} >
                                    <FormRow />
                                </Grid>
                            
                        </Grid>
                        <Grid item>
                            <Grid direction="row" container justify="flex-start" >
                                <Grid item className={classes.parts} ><Typography>Part A</Typography></Grid>
                                <Grid item className={classes.parts} ><Typography>Part B</Typography></Grid>
                            </Grid>
                            <Divider light={true}/>
                        </Grid>
                        <Grid item className={classes.last}>
                            
                                <Grid container  xs spacing={1}>
                                    <Q/>
                                </Grid>
                                <Grid container  xs spacing={1}>
                                    <Q />
                                </Grid>
                                <Grid container  xs spacing={2}>
                                    <Q />
                                </Grid>
                            
                        </Grid>

                        

                    </Grid>


                </Grid>


            </Grid>

        </div>
    )
}

export default TestStartPage
