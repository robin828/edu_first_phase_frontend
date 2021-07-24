import React, { useState, useEffect, createContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Option from "./component/Option";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ab2str from "arraybuffer-to-string";
import useUnsavedChangesWarning from "./component/hooks/useUnsavedChangewarning";
import SummaryPage from "./SummaryPage";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  QuestionImage: {
    marginTop: "2rem",
    marginLeft: "2rem",
  },
  questionOption: {
    marginTop: "1.5rem",

    marginLeft: "3rem",
  },
  button: {
    backgroundColor: "#F4A261",

    "&:hover": {
      backgroundColor: "#F4A261",
    },
    margin: "1rem",
  },
  Number: {
    fontSize: "1.8rem",
    marginRight: "1.4rem",
  },
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {},
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.up("md")]: { width: drawerWidth },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  OptionRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {},
  contentShift: {},
}));

export const testData = createContext();

export default function TestPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [value, setValue] = useState("E");
  const [answer, setAnswer] = useState({});
  const [question, setQuestion] = useState([]);
  const [submit, setSubmit] = useState("Next");
  const [testDone, setTestDone] = useState(false);
  const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(true);
  const [counter, setCounter] = useState(0);
  const [questionTime, setQuestionTime] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    setQuestion(props.location.practiceQuestions.questionData);
  }, []);

  // For Timer
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  // function stopTimer() {
  //   setIsActive(false);
  //   setCounter(0);
  //   setSecond("00");
  //   setMinute("00");
  // }

  //
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // handle Next Button after solving question
  const handleNext = () => {
    setText("");
    setText(answer[`${questionNumber}`]);
    if (submit === "Submit") {
      setTestDone(true);
    }
    const data = questionNumber + 1;
    setQuestionNumber(data);
    setValue("");
    if (35 === questionNumber + 2) {
      setSubmit("Submit");
    }
  };

  // handle Previous Button after solving question
  const handlePrev = () => {
    if (questionNumber >= 1) {
      setQuestionNumber(questionNumber - 1);
      if (submit === "Submit") setSubmit("Next");
    }
    setText(answer[`${questionNumber}`]);
    console.log(questionNumber);
  };

  // bottom line contain next and previous button
  const bottomLine = (
    <>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item>
          <Button
            className={classes.button}
            onClick={handlePrev}
            primary="true"
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.button}
            onClick={handleNext}
            primary="true"
          >
            {submit}
          </Button>
        </Grid>
      </Grid>
    </>
  );

  // making 2d array to render question box in drawer
  var q = 0;
  var questionArr = new Array(7);
  for (var i = 0; i < 7; i++) {
    questionArr[i] = new Array(5);
    for (var j = 0; j < 5; j++) {
      questionArr[i][j] = q;
      q++;
    }
  }

  // buttons to directly jump on particular subject
  const subjectButton = (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      {/* <Button
        className={classes.button}
        onClick={() => {
          setQuestionNumber(0);
        }}
      >
        Physics
      </Button>
      <Button
        className={classes.button}
        onClick={() => {
          setQuestionNumber(2);
        }}
      >
        Chemistry
      </Button>
      <Button
        className={classes.button}
        onClick={() => {
          setQuestionNumber(22);
        }}
      >
        Maths
      </Button> */}
    </div>
  );

  // main code run here
  const practiceQuestions = (
    <>
      {
        <>
          {Prompt}
          {subjectButton}
          <div className={classes.QuestionImage}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography className={classes.Number}>
                  {questionNumber + 1}
                </Typography>
              </Grid>
              <Grid item>
                {questionNumber !== question.length ? (
                  <img
                    src={`data:image/png;base64,${ab2str(
                      question === ""
                        ? ""
                        : question[questionNumber].imgs.data.data,
                      "base64"
                    )}`}
                    alt="op"
                  />
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </div>
        </>
      }
      <br />
      You marked {text} as answer.
      <div className={classes.questionOption}>
        <Option
          value={value}
          setDirty={setDirty}
          setAnswer={setAnswer}
          answer={answer}
          setValue={setValue}
          questionNumber={questionNumber}
          questionData={question}
        />
      </div>
      {bottomLine}
    </>
  );
  const handleQuestions = (e) => {
    setQuestionNumber(parseInt(e.target.innerText) - 1);
  };

  const main = (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <div class="container">
              <div class="time">
                <span class="minute">{minute}</span>
                <span>:</span>
                <span class="second">{second}</span>
              </div>
              <div class="buttons">
                <button onClick={() => setIsActive(!isActive)} class="start">
                  {isActive ? "Pause" : "Start"}
                </button>
              </div>
            </div>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {practiceQuestions}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.OptionRoot}>
          <ButtonGroup
            // color="primary"
            orientation="vertical"
            fullWidth={true}
            variant="contained"
            aria-label="primary button group"
          >
            <Button color="primary">Mark For Review</Button>
            <Button color="green">Submitted</Button>
            <Button>Not Seen</Button>
            <Button color={"red"}>Left</Button>
          </ButtonGroup>
          <br />

          {questionArr.map((ques) => (
            <ButtonGroup
              fullWidth={true}
              color="#F4A261"
              aria-label="outlined primary button group"
            >
              {ques.map((q) => (
                <Button onClick={(e) => handleQuestions(e)}>{q + 1}</Button>
              ))}
            </ButtonGroup>
          ))}
        </div>
      </Drawer>
    </div>
  );

  const sum = (
    <testData.Provider value={answer}>
      <SummaryPage />
    </testData.Provider>
  );

  return <>{testDone ? sum : main}</>;
}
