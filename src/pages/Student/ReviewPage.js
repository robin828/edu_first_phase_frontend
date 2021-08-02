import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    mainDiv: {
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 20,
        marginTop: '2rem',
        fontWeight: '400',
        border: '1px solid red'
        // color:'#E76F51'
    },
})

const ReviewPage = ({question, selectedAnswer, reviewQuestion}) => {
    const classes = useStyles()
    
    return (
        <div className={classes.mainDiv} >
        <Typography style={{textAlign: 'center', fontWeight: 600, fontSize: '1.6rem'}} > Review Question </Typography>
        
        <p style={{paddingLeft: '1rem'}} > Q - {question.questionText}</p>
        <p> Correct - {question.correctAnswer}</p>
        {question.options.forEach(option=><p> Ansewer marked - {option}</p>)}
        <p> selected Option - {selectedAnswer[reviewQuestion] && selectedAnswer[reviewQuestion][0]}</p>
        {/* <p>{question.correctAnswer}</p> */}
        </div>
    )
}

export default ReviewPage
