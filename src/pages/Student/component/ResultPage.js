/*eslint-disable*/

import React, { useState } from 'react'
import PieChart from './GraphComponent/PieChart'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { saveResult } from '../../../redux/service/studentService'
import { showHeader } from '../../../redux/slice/loginSlice'
import { useHistory } from 'react-router-dom'
import { Prompt } from 'react-router'
import ReviewPage from '../ReviewPage'

const useStyles = makeStyles({
    mainDiv: {
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 30,
        marginTop: '2rem',
        fontWeight: '400',
        // color:'#E76F51'
    },
    detail: {
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '2rem',
        fontSize: 22,
        fontFamily: 'Poppins',
    },

    button: {
        backgroundColor: '#F4A261',
        margin: 2,
    },
})

const ResultPage = ({ selectedAnswer, questions, status }) => {
    // console.log(selectedAnswer, questions, '^^')
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory();
    const [reviewQuestion, setReviewQuestion] = useState(-1);
    const incorrect = []
    const correct = []
    const leave = []
    const question_id = []

    questions.forEach((question, index) => {
        question_id.push(question._id)
        if (selectedAnswer[index]) {
            if (question.correctAnswer === selectedAnswer[index][0]) {
                correct.push(index)
                // console.log(selectedAnswer[index], index,'correct');
            } else {
                incorrect.push(index)
                // console.log(selectedAnswer[index], index,'incorrect');
            }
        } else {
            leave.push(index);
            // console.log(index)
        }
    })
    React.useEffect(()=>{
        let payload;
        if (status === 'new') {
            payload = {
                subject: questions[0].subject,
                chapter: questions[0].chapter,
                correctAnswer: correct.length,
                incorrectAnswer: incorrect.length,
                unattempted: leave.length,
                marks: correct.length * 4 - incorrect.length,
                userName: localStorage.getItem('studentUsername'),
                selectedAnswer: selectedAnswer,
                questions: question_id,
                type: 'self',
                exam: questions[0].exam,
            }
            dispatch(saveResult(payload))
        }
    }, [])
    const handleQuestion = (question) => {        
        setReviewQuestion(question)
    }

    const handleResult = () => {
        history.push('/student/dashboard')
        dispatch(showHeader())
    }
    // console.log(questions, "HHH")

    return (
        <div>
            <div className={classes.mainDiv}>
                <h4>Result</h4>
                <Typography>
                    Total Score - {correct.length * 4 - incorrect.length * 1}
                </Typography>
            </div>
            <Grid
                container
                direction="row"
                alignItems="center"
            >
                <Grid style={{textAlign: 'center'}} item xs={10} md={6}>
                    <PieChart
                        correct={correct.length}
                        incorrect={incorrect.length}
                        left={leave.length}
                    />
                </Grid>
                <Grid item xs={12} md={6} style={{textAlign: 'center'}} >
                    <Typography>Practice Summary</Typography>
                    <Typography>Correct Question - {correct.length}</Typography>
                    <Typography>
                        Incorrect Question - {incorrect.length}
                    </Typography>
                    <Typography>Unattempted Question - {leave.length}</Typography>
                    <Typography>
                        Score - {correct.length * 4 - incorrect.length * 1}/
                        {(correct.length + incorrect.length + leave.length) * 4}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent='center'
                // className={classes.detail}
            >
                <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={4}>
                    <Typography>Incorrect Question</Typography>

                    {incorrect.map((inc, index) => (
                        <>
                            <Button
                                onClick={() => handleQuestion(inc)}
                                className={classes.button}
                            >
                                {inc+1}
                            </Button>
                            {(index + 1) % 4 === 0 && <br />}
                        </>
                    ))}
                </Grid>
                <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={4}>
                    <Typography>Correct Question</Typography>

                    {correct.map((inc, index) => (
                        <>
                            <Button
                                onClick={() => handleQuestion(inc)}
                                className={classes.button}
                            >
                                {inc+1}
                            </Button>
                            {(index + 1) % 4 === 0 && <br />}
                        </>
                    ))}
                </Grid>
                <Grid style={{textAlign: 'center'}} item xs={12} sm={6} md={4}>
                    <Typography>Left Question</Typography>

                    {leave.map((inc, index) => (
                        <>
                            <Button
                                onClick={() => handleQuestion(inc)}
                                className={classes.button}
                            >
                                {inc+1}
                            </Button>
                            {(index + 1) % 4 === 0 && <br />}
                        </>
                    ))}
                </Grid>
            </Grid>

            {reviewQuestion>=0 && <ReviewPage question={questions[reviewQuestion]} reviewQuestion={reviewQuestion} selectedAnswer={selectedAnswer} /> }

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button onClick={handleResult} className={classes.button}>
                    Done Test
                </Button>
            </div>
            {/* <Prompt
                when={true}
                message="You have unsaved changes, are you sure you want to leave?"
            /> */}
        </div>

    )
}

export default ResultPage
