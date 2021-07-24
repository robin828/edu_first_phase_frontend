import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import theme from "../../../ui/theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperGrid: {
    marginTop: "1rem",
    background: "#FFFCF5",
    height: "5rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  },
  heading: {
      color: "#264653",
      fontWeight: 600,
      [theme.breakpoints.down("xs")]: {
        fontSize: ".8rem",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: ".9rem",
      },
  }
});
const TestComponent = ({ heading, subject, marks, chapter, time }) => {
  const classes = useStyles();

  return (
    <>
      <CardContent className={classes.paperGrid}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography className={classes.heading} gutterBottom variant="h5" component="h2">
              {heading}
            </Typography>
          </Grid>




          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
              <Grid item >
                  <Typography className={classes.heading} > Subject - {subject}</Typography>
              </Grid>
              <Grid item >
                  <Typography className={classes.heading} > Total Marks -  {marks}</Typography>
              </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
              <Grid item >
                  <Typography className={classes.heading} > Chapter - {chapter}</Typography>
              </Grid>
              <Grid item >
                  <Typography className={classes.heading} > Total Time - {time}</Typography>
              </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};

export default TestComponent;
