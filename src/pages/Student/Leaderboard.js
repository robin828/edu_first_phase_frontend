import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopComponent from "./component/TopComponent";
import Homeworkcard from "./component/HomeworkCard";
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    subSectionHead: {
        background: "#fffff",
        width: "100%",
        marginTop: "1rem",
        paddingRight: "3rem",
        paddingLeft: "3rem",    
    },
}));

const Leaderboard = () => {
    const classes = useStyles();
    // const studentData = useSelector((state) => state.studentData.login.existingStudent);
    

    return (
    <div>
        <TopComponent heading="Leaderboard"  />
        <Grid
        direction="column"
        container
        justify="space-evenly"
        alignItems="stretch"
        className={classes.subSectionHead}
        >
        <Grid item>
            <Homeworkcard heading="Name of Student" score="Rank" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Sahil" score="1" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Rohan Sharma" score="2" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Rahul Singh" score="3" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Virat Sharma" score="4" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Ajay Kumar" score="5" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Shreya Gupta" score="6" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Khushi Sharma" score="7" />
        </Grid>
        <Grid item>
            <Homeworkcard heading="Rohan Goyal" score="8" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Leaderboard;
