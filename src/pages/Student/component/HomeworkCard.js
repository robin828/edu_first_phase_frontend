import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import theme from "../../../ui/theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperGrid: {
    marginTop: "1rem",
    background: "#FFFCF5",
    height: "2rem",
    marginLeft: "2rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  },
});
const Homeworkcard = ({ heading, score, questions, setQuestion }) => {
  const classes = useStyles();
  const handleWorksheetQuestions = () => {
    setQuestion(questions);
  }

  return (
    <>
      <CardContent className={classes.paperGrid}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"

        >
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              {heading}
            </Typography>
          </Grid>
          <Grid item>{score}</Grid>
          <Grid item><Button onClick={handleWorksheetQuestions}>Start</Button></Grid>
        </Grid>
      </CardContent>
    </>
  );
};

export default Homeworkcard;
