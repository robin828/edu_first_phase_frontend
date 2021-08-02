/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { getChapters, getQuestions } from'../../redux/service/studentService';
import SingleSelect from '../common/SingleSelect';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from 'react-redux';
import { getTeacherDashboard } from '../../redux/service/teacherService';
import DisplayQuestions from './DisplayQuestions';
import TopComponent from '../Student/component/TopComponent';


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
  
const Homework = () => {
    const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedClass, setSelectedClass] = useState([]);
  const [standard, setStandard] = useState([]);
  const [chapters, setChapters] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState("")

  const [selectedChapter, setSelectedChapter] = useState('');
  const [noOfQuestions, setNoOfQuestions] = useState(0);
  const [displayQuestions, setDisplayQuestions] = useState(false);

  
  const classList = [];
  const chapterList = [];
  var splitClass;

  useEffect(()=>{
    getTeacherDashboard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
        setName(res.data.name)
    })
}, [])


  useEffect(()=>{
    getTeacherDashboard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
        res.data.subjectTeacher.forEach(subject=>{classList.push({value: subject, label: subject})})
        setStandard(classList);
        setSubject(res.data.subject);
    })
    if(selectedClass[0]) {
        splitClass = selectedClass[0].split('-')[0];
    }
    // console.log(splitClass)
    subject && splitClass && getChapters(subject).then(res=>{
        res.data.chaptersName.forEach(chapter=>{chapterList.push({value: chapter, label: chapter})})
        setChapters(chapterList)
    })
  }, [selectedClass])

  const questions = [
    {label: '20Q', value: '20'},
  ]
  const findQuestions = (e) => {
      console.log(splitClass, 'splitClass')
    e.preventDefault();
    console.log("hi")
    dispatch(getQuestions({selectedSubject: subject, className: selectedClass[0].split('-')[0], selectedChapter, selectedExam: selectedClass[0].split('-')[0]+'_Board', noOfQuestions}));
    setDisplayQuestions(true)
}

  return (
    <>
            <TopComponent heading={`Hi ${name.split(" ")[0]}`} />

      <form onSubmit={findQuestions} >
        <Grid spacing={3} style={{marginTop: '10px'}} container direction="row" justify="center" alignItems="center">
          <Grid item>
            <SingleSelect optionForUser={standard} selectLabel="Class" setVariable={setSelectedClass} />
          </Grid>
          <Grid item>
            <SingleSelect optionForUser={chapters} selectLabel="chapter" setVariable={setSelectedChapter} />
          </Grid>
          <Grid item>
            <SingleSelect optionForUser={questions} selectLabel="Question" setVariable={setNoOfQuestions} />
          </Grid>
          <Grid item>
            {/* <SingleSelect optionForUser={timeInterval} selectLabel="Question" setVariable={setNoOfQuestions} /> */}
          </Grid>
          <Grid item>
            <Button type="submit" > Search</Button>
          </Grid>
        </Grid>
      </form>
      {displayQuestions && <DisplayQuestions selectedClass={selectedClass} selectedChapter={selectedChapter}  />}
    </>
  );
}

export default Homework
