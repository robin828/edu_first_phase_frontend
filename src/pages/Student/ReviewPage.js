import React, { useState } from 'react'
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Latex from 'react-latex'
import { useParams } from 'react-router-dom'
import PieChart from './component/GraphComponent/PieChart'
import {BarGraph} from './component/GraphComponent/BarGraph'
import Grid from '@material-ui/core/Grid'
// import Latex from 'react-latex'
import Loader from '../common/Loader'
// import Typography from "@material-ui/core/Typography";
import Axios from 'axios'

const useStyles = makeStyles({
    mainDiv: {
        textAlign: 'center',
        fontFamily: 'Roboto Slab',
        fontSize: 30,
        marginTop: '2rem',
        fontWeight: '400',
        color: "#264653"
        // border: '1px solid red',
        // color:'#E76F51'
    },
    text: {
        // textAlign: 'center',
        fontFamily: 'Roboto Slab',
        fontSize: 20,
        marginBottom:'1rem',
        color: "#264653"
        // marginTop: '2rem',
        // fontWeight: '400',
        // border: '1px solid red',
        // color:'#E76F51'
    },
    button: {
        backgroundColor: "#F4A261",
        "&:hover": {
          backgroundColor: "#F4A261",
        },
        margin: "1rem",
      },
})

const ReviewPage = ({  selectedAnswer, reviewQuestion }) => {
    const classes = useStyles()
    const id = useParams().id
    const param = id ? id : ''
    const [testData, setTestdata] = useState()
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState({})
    const [selectedQuestion, setSelectedQuestion] = useState("")

    const url = 'http://localhost:9000'
    // const url = 'http://localhost:9000'

    React.useEffect(() => {
        Axios.get(
            `http://localhost:9000/api/student/result?userName=${localStorage.getItem(
                'studentUsername'
            )}&testId=${param}`
        ).then((res) => {
            setTestdata(res.data.result)
            console.log(res.data.result)
        })
    }, [])

    const handleQuestion = (inc) => {
        // alert(inc);
        setLoading(true);
        console.log(testData.selectedAnswer)
        testData.selectedAnswer[inc] ? setSelectedQuestion(testData.selectedAnswer[inc][0]) : setSelectedQuestion("Not Attempted")
        Axios.get(
            `http://localhost:9000/api/student/question/single?id=${inc}`
        ).then((res) => {
            // setTestdata(res.data.result)
            setQuestion(res.data)
            setLoading(false);
        })
    }

    // alert(param)

    return (
        <div >
            <Typography className={classes.mainDiv}>Practice Analysis</Typography>
            <Grid
                direction="row"
                container
                justify="space-evenly"
                alignItems="center"
                spacing={1}
            >
                <Grid item>
                    <PieChart correct={5} incorrect={3} left={6} />
                </Grid>
                <Grid item>
                    <BarGraph correct={4} incorrect={4} left={2} />
                </Grid>
                <Grid item>
                    <PieChart correct={5*4} incorrect={3*-1} left={0} />
                </Grid>
            </Grid>
            <Typography className={classes.mainDiv} >Question Analysis</Typography>

            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="space-evenly"
            >
                <Grid item md={5} sm={4} >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        // className={classes.detail}
                    >
                        {/* <Typography>Correct Questions</Typography> */}
                        {testData && testData.correctQuestions.length > 0 && (
                            <Grid
                                style={{ textAlign: 'center' }}
                                item
                                xs={12}
                                // sm={6}
                                // md={4}
                            >
                                <Typography className={classes.text}> Correct Question</Typography>

                                {testData.correctQuestions.map((inc, index) => (
                                    <>
                                        <Button
                                         onClick={() => handleQuestion(inc)}
                                        className={classes.button}
                                        >
                                            {index + 1}
                                        </Button>
                                        {(index + 1) % 4 === 0 && <br />}
                                    </>
                                ))}
                            </Grid>
                        ) }
                        {/* <Typography>Incorrect Questions</Typography> */}
                        {testData && testData.inCorrectQuestions.length > 0 && (
                            <Grid
                                style={{ textAlign: 'center' }}
                                item
                                xs={12}
                                // sm={6}
                                // md={4}
                            >
                                <Typography className={classes.text}>Incorrect Question</Typography>

                                {testData.inCorrectQuestions.map(
                                    (inc, index) => (
                                        <>
                                            <Button
                                             onClick={() => handleQuestion(inc)}
                                            className={classes.button}
                                            >
                                                {index + 1}
                                            </Button>
                                            {(index + 1) % 4 === 0 && <br />}
                                        </>
                                    )
                                )}
                            </Grid>
                        )}

                        {/* <Typography>Unattempted Questions</Typography> */}
                        {testData && testData.leftQuestions.length > 0 && (
                            <Grid
                                style={{ textAlign: 'center' }}
                                item
                                xs={12}
                                // sm={6}
                                // md={4}
                            >
                                <Typography className={classes.text}>Unattempted Question</Typography>

                                {testData.leftQuestions.map((inc, index) => (
                                    <>
                                        <Button
                                         onClick={() => handleQuestion(inc)}
                                        className={classes.button}
                                        >
                                            {index + 1}
                                        </Button>
                                        {(index + 1) % 4 === 0 && <br />}
                                    </>
                                ))}
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                {loading ? <Loader /> : 
                <Grid item md={7} sm={8} >
                    <Typography className={classes.text} >
                    Q - <Latex>{question.questionText}</Latex>
                    </Typography>
                    <Typography className={classes.text} > 
                    <span style={{color: "#F4A261"}} >Correction Answer</span> - <Latex>{question.correctAnswer}</Latex>
                    </Typography>
                    <Typography className={classes.text} >
                    <span style={{color: "#F4A261"}}>Your selected Answer</span> - <Latex>{selectedQuestion}</Latex>
                    </Typography>
                    {/* <Latex>{question.correctAnswer}</Latex>
                    <Latex>Your selected option - {selectedQuestion}</Latex>
                     */}
                     <Typography className={classes.text} >
                     <span style={{color: "#F4A261"}}>Solution</span></Typography> 
                     <img src={`https://edu-solutiion-images.s3.ap-south-1.amazonaws.com/${question.solution}`} />
                </Grid>}
            </Grid>
        </div>
    )
}

export default ReviewPage
