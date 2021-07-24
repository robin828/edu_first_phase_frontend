import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import TopComponent from "./component/TopComponent";
import TestComponent from "./component/TestComponent";
import { CardActionArea } from "@material-ui/core";
import TestStartPage from "./TestStartPage";
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    button: {
      backgroundColor: "#F4A261",
      "&:hover": {
        backgroundColor: "#F4A261",
      },
      margin: "1rem",
    },
    mainDiv: {
      marginLeft: "2rem",
    },
    root: {
        width: "100%"
      },
    
  });
  

const Test = () => {
  const classes = useStyles();

  const [selectedClass, setSelectedClass] = useState("Select Class");
  const [selectedSubject, setSelectedSubject] = useState("Select Subject");
  const [open, setOpen] = React.useState(false);
  const studentData = useSelector((state) => state.studentData.login.existingStudent);
  if(!studentData) {
    return null
  }


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TopComponent heading="Tests" studentClass={studentData.studentClass} rollNo={studentData.rollNo} />
      <div className={classes.mainDiv}>
        <Button
        onClick={handleClickOpen}
          aria-controls="first"
          aria-haspopup="true"
        //   onClick={handleClick}
          className={classes.button}
        >
          {selectedClass}
        </Button>
        <Button
          aria-controls="simple"
          aria-haspopup="true"
        //   onClick={handleClick}
          className={classes.button}
        >
          {selectedSubject}
        </Button>
      </div>
      {/* <div className={classes.root} >
      <ButtonGroup orientation="vertical" >
          <Button>
          <TestComponent heading="Test 1" subject="Physics" marks="360" chapter="Laws of Motion" time="3 hours" />
          </Button>
          <Button>              
          <TestComponent heading="Test 2" subject="Maths" marks="360" chapter="Function" time="3 hours" />

          </Button>
          <Button>              
          <TestComponent heading="Test 3" subject="Chemistry" marks="360" chapter="Chemical Bonding" time="3 hours" />

          </Button>
          <Button>              
          <TestComponent heading="Test 4" subject="Physics, Chemistry, Maths" marks="360" chapter="Full Syllabus" time="3 hours" />

          </Button>

      </ButtonGroup>
      </div> */}


      <CardActionArea onClick={handleClickOpen}  >
      <TestComponent heading="Test 1" subject="Physics" marks="360" chapter="Laws of Motion" time="3 hours" />
      </CardActionArea>

      <CardActionArea onClick={handleClickOpen}  >
           <TestComponent onClick={handleClickOpen} heading="Test 2" subject="Maths" marks="360" chapter="Function" time="3 hours" />
      </CardActionArea>

      <CardActionArea onClick={handleClickOpen}  >
      <TestComponent onClick={handleClickOpen} heading="Test 3" subject="Chemistry" marks="360" chapter="Chemical Bonding" time="3 hours" />
      </CardActionArea>

      <CardActionArea onClick={handleClickOpen}  >
      <TestComponent onClick={handleClickOpen} heading="Test 4" subject="Physics, Chemistry, Maths" marks="360" chapter="Full Syllabus" time="3 hours" />
      </CardActionArea>

      

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <TestStartPage />
      </Dialog> 

    </div>
  );
};

export default Test;
