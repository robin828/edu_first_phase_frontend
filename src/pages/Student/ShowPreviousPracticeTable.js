import React, { useEffect, useState } from 'react'
import {
    getResults,
    getQuestionBy_id,
} from '../../redux/service/studentService'
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux'
import { CardContent, Grid, Typography, Button } from '@material-ui/core'
import ResultPage from './component/ResultPage'
import HeadingComponent from './component/HeadingComponent'
import Graph from "../../img/graph.svg";
import Loader from '../common/Loader';

const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: "#F4A261",
      "&:hover": {
        backgroundColor: "#F4A261",
      },
      margin: "1rem",
    }
  }));


const ShowPreviousPracticeTable = () => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const [results, setResults] = useState([])
    const [practiceResult, setPracticeResult] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState({});
    const questions = useSelector(state => (state.questions.question.questions))
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getResults().then((res) => {
            setResults(res.data.results)
            setLoading(false)
        })
    }, [])
    const openPracticeResult = (questions, selectedAnswer) => {
        console.log(questions)
        dispatch(getQuestionBy_id(questions))
        setSelectedAnswer({...selectedAnswer});
        setPracticeResult(true)
    }

    return (
        <>
        {
        practiceResult && questions && questions.length>0 ? <ResultPage questions={questions} selectedAnswer={selectedAnswer} status="old" /> : 
        <div style={{marginTop: '2rem'}} >
            <HeadingComponent imagePath={Graph} heading="See Previous" />
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                style={{marginTop: '2rem', color: '#264653'}}
            >
                <Grid item>
                    <Typography>Date</Typography>
                </Grid>
                <Grid item>
                    <Typography>Subject</Typography>
                </Grid>
                <Grid item>
                    <Typography>Chapter</Typography>
                </Grid>
                <Grid item>
                    <Typography>Type</Typography>
                </Grid>
                <Grid item>
                    <Typography>Button</Typography>
                </Grid>
            </Grid>
            {loading ? <Loader /> :
            results.map((result) => (
                <CardContent>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Grid item>
                            <Typography>{result.Date.toString().split('T')[0]}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{result.subject}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{result.chapter}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{result.type}</Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                className={classes.button}
                                onClick={() =>
                                    openPracticeResult(result.questions, result.selectedAnswer)
                                }
                            >
                                Open
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            ))}
        </div>
}
        </>
    )
}

export default ShowPreviousPracticeTable
