/*eslint-disable*/

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeHeader } from '../../redux/slice/loginSlice';
import QuestionLayout from './component/QuestionLayout';
import { Grid, Button } from '@material-ui/core';
import Loader from '../common/Loader';


const PracticeInfo = ({ques}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    dispatch(removeHeader());
    console.log("hihjjh")
    const [testStart, setTestStart] = useState(false);
    let questions = useSelector(state => state.questions.question.questions)
    if(ques && ques.length>0) {
        console.log(typeof ques)
        questions = [...ques];
    }
    const noOfQuestions = useSelector(state => state.noOfQuestions);
    const instructions = (
        <>
            Do the Test
            <button onClick={() => setTestStart(true)} >Start Test</button>
        </>
    )
    if (testStart) {

        var mainTestPage = (
            <>
            {
                loading ? <Loader /> : <QuestionLayout 
                questions={questions}
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
        </>
    )
}

export default PracticeInfo
