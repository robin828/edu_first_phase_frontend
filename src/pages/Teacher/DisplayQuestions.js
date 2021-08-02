/*eslint-disable*/

import React from 'react'
import { FixedSizeList as List } from 'react-window'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import { Typography, Button } from '@material-ui/core'
import { Radio } from 'pretty-checkbox-react'
import { assignQuestionsToStudents } from '../../redux/service/teacherService'
import TopComponent from '../Student/component/TopComponent';

const useStyles = makeStyles((theme) => ({
    width: {
        textAlign: 'center',
        background: 'red',
        width: 1000,
        [theme.breakpoints.down('md')]: {
            width: 300,
        },
        height: 500,
    },
}))

const DisplayQuestions = ({ selectedClass, selectedChapter }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const questions_id = []

    const questions = useSelector((state) => state.questions.question)
    const handleClick = () => {
        console.log('hi')
    }
    React.useEffect(()=>{
        getTeacherDashboard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
            setName(res.data.name)
        })
    }, [])

    const assignQuestions = () => {
        questions.questions.forEach((question) => {
            questions_id.push(question._id)
        })
        console.log(questions_id)
        dispatch(
            assignQuestionsToStudents({
                questions_id,
                userName: localStorage.getItem('teacherUserName'),
                selectedClass,
                selectedChapter,
            })
        )
    }
    return (
        <>
        <TopComponent heading={`Hi ${name}`} />
            <Typography style={{ textAlign: 'center' }}>
                Assign Questions
            </Typography>

            {questions.questions && questions.questions.map((question, index) => (
                <CardContent
                    className={classes.cardContent}
                    onClick={handleClick}
                >
                    <Typography key={question.questionText}>
                        {index + 1} - {question.questionText}
                    </Typography>
                </CardContent>
            ))}

            <Button onClick={assignQuestions}>Assign Questions</Button>
        </>
    )
}

export default DisplayQuestions
