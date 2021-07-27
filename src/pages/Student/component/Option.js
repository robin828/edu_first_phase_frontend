/*eslint-disable*/

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import { Radio } from 'pretty-checkbox-react';
import Drawer from '@material-ui/core/Drawer';
import { useSelector } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




const useStyles = makeStyles({
  questionText: {
    fontSize: 25
  },
  topGrid: {
    marginTop: '4rem',
    marginLeft: '2rem'
  },
  questionNumber: {
    fontSize: 25
  },
  options: {
    marginBottom: '3rem',
    marginLeft: '2rem',
    fontWeight: 200

  },
  optionDiv: {
    // marginTop: '2.3rem',
    fontSize: 25,
    fontWeight: 200,
  }
})


const Option = ({ options, questionNumber, setQuestionNumber }) => {

  const classes = useStyles();
  const [selectedAnswer, setSelectedAnswer] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const A = React.useRef(null);
  const B = React.useRef(null);
  const C = React.useRef(null);
  const D = React.useRef(null);
  const noOfQuestion = useSelector(state => state.questions.noOfQuestion);

    var q = 0;
    var questionArr = new Array(noOfQuestion);
  for (var i = 0; i < noOfQuestion/5; i++) {
    questionArr[i] = new Array(5);
    for (var j = 0; j < 5; j++) {
      questionArr[i][j] = q;
      q++;
    }
  }
  const handleQuestions = (e) => {
        console.log("hi8787897")
        const ques = e.target.innerText;
        setQuestionNumber(ques)
        if(selectedAnswer[ques] && selectedAnswer[ques][1] ) {
          selectedAnswer[ques][1].current.checked = selectedAnswer[ques][1];
        }
        else {
          A.current.checked='';
          B.current.checked='';
          C.current.checked='';
          D.current.checked='';
          if(selectedAnswer[ques]) {
            selectedAnswer[ques][1].current.checked = ''
          }
        }
  };
  const buttonInfo = [
      {label: "Mark For Review", color: "primary"},
      {label: "Save", color: "inherit"},
      {label: "Mark For Review and Save", color: "default"},
      {label: "Not Seen", color: "#ccc"},
      {label: "Not Done", color: "secondary"}
  ]
  const refs = [A, B, C, D]

  const onChangeValue = () => {
    if (A.current.checked) {
      setSelectedAnswer({ ...selectedAnswer, [questionNumber]: [A.current.value, A] })
    }
    if (B.current.checked) {
      setSelectedAnswer({ ...selectedAnswer, [questionNumber]: [B.current.value, B] })
    }
    if (C.current.checked) {
      setSelectedAnswer({ ...selectedAnswer, [questionNumber]: [C.current.value, C] })
    }
    if (D.current.checked) {
      setSelectedAnswer({ ...selectedAnswer, [questionNumber]: [D.current.value, D] })
    }
  }
  const handleNext = () => {
  
    setQuestionNumber(questionNumber + 1)
    if (selectedAnswer[questionNumber + 1] && selectedAnswer[questionNumber + 1][1]) {
      selectedAnswer[questionNumber + 1][1].current.checked = selectedAnswer[questionNumber + 1][1];
    }
    else {
      if(selectedAnswer[questionNumber]) {
        selectedAnswer[questionNumber][1].current.checked = ''
      }
    }

  }
  const handlePrevious = () => {
    if (questionNumber > 1) {
      setQuestionNumber(questionNumber - 1)
      if(selectedAnswer[questionNumber-1] && selectedAnswer[questionNumber - 1][1] ) {
        selectedAnswer[questionNumber - 1][1].current.checked = selectedAnswer[questionNumber - 1][1];
      }
      else {
        if(selectedAnswer[questionNumber]) {
          selectedAnswer[questionNumber][1].current.checked = ''
        }
      }
    }
  }
  const handleDrawerOpen = () => {
    if(open) {
        setOpen(false);
    }
    else {
        setOpen(true);

    }
  };

  return (
    <>
    {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            // className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton> */}
      <div className={classes.optionDiv} onChange={onChangeValue} >
        {options.map((option, index) => (
          <>
            <Radio name="option" className={classes.options} ref={refs[index]} value={option} bigger >
              {option}
            </Radio>
            <br />
          </>
        ))}
      </div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Button onClick={handlePrevious} >Preous</Button>
        </Grid>
        <Grid item>     
         <Button onClick={handleNext} >Next</Button>
        </Grid>
      </Grid>

      <Drawer variant="persistent"
        anchor="right"
        open={open} >
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
          {buttonInfo.map(button=>(
              <Button key={button.label} variant="contained" color={button.color} >{button.label}</Button>
          ))}
        </Drawer>

    </>
  );
};

export default Option;
