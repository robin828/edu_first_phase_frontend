import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Latex from 'react-latex'
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
        
        <p style={{paddingLeft: '1rem'}} > Q - <Latex>{question.questionText}</Latex></p>
        <p> Correct - <Latex>{question.correctAnswer}</Latex></p>
        {question.options.forEach(option=><p> Ansewer marked - <Latex>{option}</Latex></p>)}
        <p> selected Option - <Latex>{selectedAnswer[reviewQuestion] && selectedAnswer[reviewQuestion][0]}</Latex></p>
        {/* <p>{question.correctAnswer}</p> */}
        </div>
    )
}

export default ReviewPage
