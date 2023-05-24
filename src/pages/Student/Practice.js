/*eslint-disable*/

import React, { useEffect, useState } from "react";
import TopComponent from "./component/TopComponent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { useSelector, useDispatch } from 'react-redux';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { getExam, getChapters, getQuestions, getResults, getStudentTopCard } from'../../redux/service/studentService';
import SingleSelect from '../common/SingleSelect';
import PracticeInfo from "./PracticeInfo";
import ShowPreviousPracticeTable from './ShowPreviousPracticeTable';
import { removeHeader } from "../../redux/slice/loginSlice";

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
}));

const Practice = () => {
  const classes = useStyles();
  // const studentData = useSelector((state) => state.studentData.login.existingStudent);
  const dispatch = useDispatch();

  const [exams, setExams] = useState([]);
  const [exam, setExam] = useState([]);
  const [subject, setSubject] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [chapters, setChapters] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [testInstruction, setTestInstruction] = useState(false);
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  const [topCard, setTopCard] = useState({});
  const [studentSubject, setStudentSubject] = useState([])

  const examsList = [];
  const subjectList = []
  const chapterList = []
  const url = "http://localhost:9000/api/student/subject";
  // const u rl = "https://api.myonlineedu.in/api/student/subject";

  useEffect(()=>{
    getStudentTopCard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
      setTopCard(res.data);
    })
    Axios.post(url, {
            userName: localStorage.getItem('studentUsername'),
        }).then((res) => {
            console.log(res.data, ":::")
            setStudentSubject(res.data.subjects)
        })
}, [])

  useEffect(()=>{
    !selectedExam && topCard.standard && getExam(topCard.standard.split('-')[0]).then(res=>{
      setExams(res.data)
      console.log(res.data)
      res.data.exams.forEach(exam=>{examsList.push({value: exam.examName, label: exam.examName})})
      setExam(examsList)
    })
    selectedExam && exams.exams.filter(exam=>{
      if(exam.examName === selectedExam) {
        exam.subjects.forEach((subject, index) => {
          console.log(subject, "||||$$")
          let sub = studentSubject.filter(s => s === subject);
          console.log(sub, index, typeof sub)
          if(sub.length>0) {
            subjectList.push({value: subject, label: subject})
          }
          sub = "";
        })
        setSubject(subjectList)
      }
    })
    selectedSubject && getChapters(selectedSubject, selectedExam).then(res=>{
      res.data.chaptersName.forEach(chapter=>{chapterList.push({value: chapter, label: chapter})})
      setChapters(chapterList)
    })
  }, [selectedExam, selectedSubject, topCard.standard])

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        // document.exitFullscreen();
      }
    }
  }

  const questions = [,
    {label: '10Q', value: 10},
    {label: '20Q', value: 20},
  ]
  const findQuestions = (e) => {
    e.preventDefault();
    // toggleFullScreen();
    // dispatch(removeHeader());
    setTestInstruction(true)
    dispatch(getQuestions({selectedSubject, className: topCard.standard.split('-')[0], selectedChapter, selectedExam, noOfQuestions}));
  }

  return (
    <>
    {testInstruction ? <PracticeInfo /> :
    <>
    <TopComponent
                heading={'Hi  ' + topCard.name + '!'}
                studentClass={topCard.standard}
                rollNo={topCard.rollNumber}
            />
      <form onSubmit={findQuestions} >
        <Grid spacing={3} style={{marginTop: '10px'}} container direction="row" justify="center" alignItems="center">
          <Grid item>
            <SingleSelect optionForUser={exam} selectLabel="Exam" setVariable={setSelectedExam} />
          </Grid>
          <Grid item>
            <SingleSelect optionForUser={subject} selectLabel="Subject" setVariable={setSelectedSubject} />
          </Grid>
          <Grid style={{zIndex: 999}} item>
            <SingleSelect optionForUser={chapters} selectLabel="chapter" setVariable={setSelectedChapter} />
          </Grid>
          <Grid item>
            <SingleSelect optionForUser={questions} selectLabel="Question" setVariable={setNoOfQuestions} />
          </Grid>
        </Grid>
        {
          selectedExam && selectedSubject && selectedChapter && noOfQuestions>0 ? 
        <div style={{textAlign: 'center'}}>
            <Button onKeyPress={Keyboard.dismiss} type="submit" className={classes.button}> Search</Button>
          </div> : "" }
      </form>
      <ShowPreviousPracticeTable />
      </>
}
    </>
  );
};

export default Practice;