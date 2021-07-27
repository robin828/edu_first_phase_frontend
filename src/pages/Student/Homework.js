/*eslint-disable*/

import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TopComponent from './component/TopComponent'
import Homeworkcard from './component/HomeworkCard'
import Divider from '@material-ui/core/Divider'
import { useSelector } from 'react-redux'
import { getStudentTopCard, getTeacherQuestions } from '../../redux/service/studentService'
import PracticeInfo from './PracticeInfo'
import Loader from '../common/Loader'

const useStyles = makeStyles((theme) => ({
    choiceGrid: {
        marginLeft: '1rem',
        marginTop: '1rem',
    },
    choiceText: {
        marginLeft: '1rem',
        fontFamily: 'Poppins',
        fontWeight: 400,
        marginRight: '3rem',
        padding: theme.spacing(2),

        color: '#264653',
    },

    subSectionHead: {
        background: '#fffff',
        width: '100%',
        marginTop: '1rem',
        paddingRight: '3rem',
        paddingLeft: '3rem',
    },
    headText: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        background: '#264653',
        color: '#ffffff',
        marginTop: '1rem',
        marginBottom: '1rem',
        paddingRight: '3rem',
        paddingLeft: '3rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
}))

const Homework = () => {
    const classes = useStyles()
    const studentData = useSelector(
        (state) => state.studentData.login.existingStudent
    )
    const [teacherQuestion, setTeacherQuestions] = useState([])
    const [questions, setQuestion] = useState([])
    const [loading, setLoading] = useState(true);
    const [topCard, setTopCard] = useState({});


//   useEffect(()=>{
//     getStudentTopCard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
//       setTopCard(res.data);
//     })
// }, [])
    // if(!studentData) {
    //   return null
    // }

    useEffect(() => {
        getTeacherQuestions().then((res) => {
            console.log(res.data)
            setTeacherQuestions(res.data.teacherQuestions)
            setLoading(false)
        })
        getStudentTopCard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
            setTopCard(res.data);
          })
    }, [])

    const handleClick = () => {
        console.log('hi')
    }

    return (
        <div>
                  <TopComponent heading={"Hi  " + topCard.name + "!"} studentClass={topCard.standard} rollNo={topCard.rollNumber}   />

            {questions.length > 0 ? (
                <PracticeInfo ques={questions} />
            ) : (
                <>
                <Grid
                        direction="column"
                        container
                        justify="space-evenly"
                        alignItems="stretch"
                        className={classes.subSectionHead}
                    >
                        <Grid item>
                            <Typography className={classes.headText}>
                                Worksheets
                            </Typography>
                        </Grid>
                        {loading ? <Loader /> : 
                
                        teacherQuestion.map((question) => (
                            <Grid item>
                                <Homeworkcard
                                    heading={question.subject}
                                    questions={question.questions}
                                    setQuestion={setQuestion}
                                    score="Pending"
                                />
                            </Grid>
                        ))}
                    </Grid> 
                </>
            )}
        </div>
    )
}

export default Homework
