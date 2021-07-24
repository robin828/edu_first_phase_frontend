import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import PieChart from "./component/GraphComponent/PieChart";
import {testData} from './TestPage';

// import red from'@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#F4A261",
    "&:hover": {
      backgroundColor: "#F4A261",
    },
    margin: "1rem",
  },
}));

const SummaryPage = (props) => {
  const classes = useStyles();
  const [summaryDone, setSummaryDone] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [phyCorrect, setPhyCorrect] = useState(0);
  const [chemCorrect, setChemCorrect] = useState(0);
  const [mathCorrect, setMathCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [mathIncorrect, setMathIncorrect] = useState(0);
  const [phyIncorrect, setPhyIncorrect] = useState(0);
  const [chemIncorrect, setChemIncorrect] = useState(0);

  const summary = useContext(testData)

  const handleSummary = () => {
    setSummaryDone(true);
  };
  console.log(summary);
  // const summary = props.answer;

  useEffect(() => {
    Object.size = function (summary) {
      var size = 0,
        key;
      for (key in summary) {
        if (summary.hasOwnProperty(key)) size++;
      }
      return size;
    };
    var correctQ = 0;
    let phyCorrectQ = 0;
    let chemCorrectQ = 0;
    let mathCorrectQ = 0;
    let phyIncorrectQ = 0;
    let chemIncorrectQ = 0;
    let mathIncorrectQ = 0;
    var inCorrectQ = 0;

    for (var i = 0; i < 35 + 1; i++) {
      if (summary[`${i + 1}`] !== undefined) {
        if (summary[`${i + 1}`][0] === summary[`${i + 1}`][3]) {
          if (summary[`${i + 1}`][1] === "Physics") {
            phyCorrectQ = phyCorrectQ + 1;
          }
          if (summary[`${i + 1}`][1] === "Chemistry") {
            chemCorrectQ = chemCorrectQ + 1;
          }
          if (summary[`${i + 1}`][1] === "Maths") {
            mathCorrectQ = mathCorrectQ + 1;
          }
          correctQ++;
        }
        if (summary[`${i + 1}`][0] !== summary[`${i + 1}`][3]) {
          if (summary[`${i + 1}`][1] === "Physics") {
            phyIncorrectQ = phyIncorrectQ + 1;
          }
          if (summary[`${i + 1}`][1] === "Chemistry") {
            chemIncorrectQ = chemIncorrectQ + 1;
          }
          if (summary[`${i + 1}`][1] === "Maths") {
            mathIncorrectQ = mathIncorrectQ + 1;
          }
          inCorrectQ++;
        }
      }
    }
    setCorrect(correctQ);
    setPhyCorrect(phyCorrectQ);
    setChemCorrect(chemCorrectQ);
    setMathCorrect(mathCorrectQ);
    setIncorrect(inCorrectQ);
    setMathIncorrect(mathIncorrectQ);
    setChemIncorrect(chemIncorrectQ);
    setPhyIncorrect(phyIncorrectQ);
  }, [summary]);
  const summaryData = (
    <>
      <div>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <PieChart
              correct={correct}
              incorrect={incorrect}
              left={35 - correct - incorrect}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <PieChart
                  correct={phyCorrect}
                  incorrect={phyIncorrect}
                  left={35 - correct - incorrect}
                />
              </Grid>
              <Grid item>
                <PieChart
                  correct={chemCorrect}
                  incorrect={chemIncorrect}
                  left={35 - correct - incorrect}
                />
              </Grid>
              <Grid item>
                <PieChart
                  correct={mathCorrect}
                  incorrect={mathIncorrect}
                  left={35 - correct - incorrect}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );

  return (
    <>
      {summaryDone ? <Redirect to="/practice" /> : summaryData}
      <Button className={classes.button} onClick={handleSummary}>
        Test Done
      </Button>
    </>
  );
};

export default SummaryPage;
