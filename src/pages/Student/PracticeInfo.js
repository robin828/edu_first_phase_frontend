/*eslint-disable*/

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeHeader } from '../../redux/slice/loginSlice';
import QuestionLayout from './component/QuestionLayout';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Loader from '../common/Loader';
const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        fontFamily: 'Roboto Slab',
        fontSize: 33,
        marginTop: '2rem',
        fontWeight: '600',
        color: "#264653"
    },
    mainBoundary: {
        margin: '3rem'
    },
    subHeading: {
        fontFamily: 'Roboto Slab',
        fontSize: 27,
        marginTop: '2rem',
        fontWeight: '500',
        color: "#F4A261"
    },
    info: {
        fontFamily: 'Roboto Slab',
        fontWeight: '400',
    },
    button: {
        backgroundColor: "#F4A261",
        "&:hover": {
          backgroundColor: "#F4A261",
        },
        margin: "1rem",
      },

    
  }));

const PracticeInfo = ({ques, type}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    // const [loading, setLoading] = useState(true);
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.documentElement.requestFullscreen();
            // document.exitFullscreen();
          }
        }
      }
      React.useEffect(()=>{
        try {
            toggleFullScreen()
        } catch (error) {
            console.log(error)
        }
    }, [])
    dispatch(removeHeader());
    const [testStart, setTestStart] = useState(false);
    let questions = useSelector(state => state.questions.question.questions)
    if(ques && ques.length>0) {
        questions = [...ques];
    }console.log('jijijiji', testStart)
    const noOfQuestions = useSelector(state => state.noOfQuestions);
    const instructions = (
        <>
            {/* <Grid container direction="row" alignItems="center" justifyContent="center" style={{marginTop: '2rem'}} >
                
            </Grid> */}
            <div style={{textAlign:'center'}} >
            <Typography className={classes.heading} >
                    Welcome to the Practice Session
                </Typography>
                <div className={classes.mainBoundary} >
                <Typography className={classes.subHeading} >
                    Basic Info
                </Typography>
                <Typography className={classes.info} >
                    These are just practice question your leaderboard ranking does not affect by this.
                    </Typography>
                    <Typography className={classes.info} >
                    For every correct question you will get +4 marks.
                </Typography>
                <Typography className={classes.info} >
                    For every Incorrect question you will get -1 marks.
                </Typography>
                <Typography className={classes.subHeading} >
                    Navigating to a Question:
                </Typography>
                <Typography className={classes.info} >
                    To Navigate a question, do the following:
                    </Typography>
                    <Typography className={classes.info} >
                    Click on Next to save your answer for the current question and then go to the next question.
                </Typography>
                <Typography className={classes.subHeading} >
                    Answering to a Question:
                </Typography>
                <Typography className={classes.info} >
                    To answer a question, do the following:
                    </Typography>
                    <Typography className={classes.info} >
                    To select you answer, click on the button of one of the options.

                </Typography>
                <Typography className={classes.info} >
                To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button
                    </Typography>
                    <Typography className={classes.info} >
                    To change your chosen answer, click on the button of another option
                    </Typography><Typography className={classes.info} >
                    To save your answer, you MUST click on the Save & Next button.
                                        </Typography>
                    
                </div>
                <Typography>I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.</Typography>
                <Button onPress={Keyboard.dismiss} className={classes.button} onClick={() => setTestStart(true)} >Start Test</Button>
                </div>
        </>
    )
    if (testStart) {

        var mainTestPage = (
            <>
            {
                <QuestionLayout 
                questions={questions}
                type={type}
            />
            }
            </>
        )

    }

    return (
        <>
            {
                testStart ? mainTestPage : instructions
            }

            {/* hi */}
        </>
    )
}

export default PracticeInfo
