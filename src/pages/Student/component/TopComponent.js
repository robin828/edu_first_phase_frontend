import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import theme from "../../../ui/theme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
const useStyles = makeStyles({
  jumbotron: {
    background:
      "linear-gradient(to right, #e76f51, #e76f51, #e76f51, #e76f51, #e76f51, #e87650, #e97e50, #ea8550, #eb9552, #eba557, #eab55f, #e9c46a)",
    height: "25vh",
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem",
  },
  name: {
    color: "white",
    fontWeight: 800,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9em",
    },
  },
});

const TopComponent = ({ heading, studentClass, rollNo }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        className={classes.jumbotron}
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3" className={classes.name}>
            {heading}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-end"
            className={classes.name}
          >
            <Typography variant="h6">Class- {studentClass}</Typography>
            <Typography variant="h6">Roll Number- {rollNo}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

TopComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  studentClass: PropTypes.string.isRequired,
  rollNo: PropTypes.string.isRequired,
};
export default TopComponent;
