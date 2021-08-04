/*eslint-disable*/

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeHeader } from '../../redux/slice/loginSlice';
import QuestionLayout from './component/QuestionLayout';
import { Grid, Button, Typography } from '@material-ui/core';
import Loader from '../common/Loader';


const PracticeInfo = ({ques, type}) => {
    const dispatch = useDispatch();
    // const [loading, setLoading] = useState(true);
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            // document.exitFullscreen();
          }
        }
      }
      React.useEffect(()=>{
        toggleFullScreen();
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
            <Grid container direction="row" alignItems="center" justifyContent="center" style={{marginTop: '2rem'}} >
                <Typography>
                    Welcome to the test
                </Typography>
                <Typography>
                    Correct Question reward you +4 marks
                </Typography>
                <Typography>
                    Incorrect Question reward you -1 marks
                </Typography>
                <Button onClick={() => setTestStart(true)} >Start Test</Button>
            </Grid>
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
