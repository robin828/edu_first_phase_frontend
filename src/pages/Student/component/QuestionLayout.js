/*eslint-disable*/

import React, { useState, useRef } from 'react'
import { Radio } from 'pretty-checkbox-react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Option from './Option'
import { Typography } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
// import FeedbackIcon from '@mui/icons-material/Feedback';
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Latex from 'react-latex'

import MenuIcon from '@material-ui/icons/Menu'
import theme from '../../../ui/theme'
import ResultPage from './ResultPage'
import { makeStyles } from '@material-ui/core/styles'
import Timer from 'react-compound-timer'

import '@djthoms/pretty-checkbox'
import { useSelector } from 'react-redux'
import { displaySelectedQuestions } from '../../../utils/questionUtils'
import { saveResult } from '../../../redux/service/studentService'

const useStyles = makeStyles({
    questionText: {
        fontSize: 30,
        [theme.breakpoints.down('md')]: {
            fontSize: 20,
            padding: 10,
        },
        fontWeight: 200,
        padding: 50,
    },
    topGrid: {
        paddingTop: '4rem',
        paddingLeft: '2rem',
    },
    questionNumber: {
        fontSize: 15,
    },
    options: {
        marginBottom: '3rem',
        marginLeft: '2rem',
    },
    optionDiv: {
        // marginTop: '2.3rem',
        // fontSize: 25,
        fontWeight: 200,
    },
    drawer: {
        width: 300,
        flexShrink: 0,
    },
    button: {
        backgroundColor: '#F4A261',
        margin: 2,
    },
    mainLayout: {
        marginTop: '2rem',
        textAlign: 'center'
    },
})

const options = [
    'Spelling Mistake in Question',
    'Spelling Mistake in Answer',
    'Wrong Question',
    'Incorrect Options',
    'Out of syllabus',
]

const ITEM_HEIGHT = 48

const QuestionLayout = ({ questions, type }) => {
    // console.log(questions, 'questions')
    const classes = useStyles()
    const [questionNumber, setQuestionNumber] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = React.useState({})
    const [submit, setSubmit] = useState('Next')
    const [result, setResult] = useState(false)
    const [suggestion, setSuggestion] = useState('')
    const A = React.useRef(null)
    const B = React.useRef(null)
    const C = React.useRef(null)
    const D = React.useRef(null)

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setSuggestion(event.target.value)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    console.log(suggestion)

    setTimeout(() => {
        setResult(true)
    }, 60000000)

    // const [open, setOpen] = React.useState(false);

    const noOfQuestion = useSelector((state) => state.questions.noOfQuestion)
    // console.log(noOfQuestion, '$%')

    // var q = 0;
    // var questionArr = new Array(noOfQuestion);
    // for (var i = 0; i < noOfQuestion / 5; i++) {
    //     questionArr[i] = new Array(5);
    //     for (var j = 0; j < 5; j++) {
    //         questionArr[i][j] = q;
    //         q++;
    //     }
    // }
    // const handleQuestions = (e) => {
    //     console.log("hi8787897")
    //     const ques = e.target.innerText;
    //     setQuestionNumber(ques)
    //     if (selectedAnswer[ques] && selectedAnswer[ques][1]) {
    //         selectedAnswer[ques][1].current.checked = selectedAnswer[ques][1];
    //     }
    //     else {
    //         A.current.checked = '';
    //         B.current.checked = '';
    //         C.current.checked = '';
    //         D.current.checked = '';
    //         if (selectedAnswer[ques]) {
    //             selectedAnswer[ques][1].current.checked = ''
    //         }
    //     }
    // };
    // const buttonInfo = [
    //     { label: "Mark For Review", color: "primary" },
    //     { label: "Save", color: "inherit" },
    //     { label: "Mark For Review and Save", color: "default" },
    //     { label: "Not Seen", color: "#ccc" },
    //     { label: "Not Done", color: "secondary" }
    // ]
    const refs = [A, B, C, D]

    const onChangeValue = () => {
        if (A.current.checked) {
            console.log(questionNumber)
            console.log(questions[questionNumber])

            setSelectedAnswer({
                ...selectedAnswer,
                [questionNumber]: [A.current.value, A],
                [questions[questionNumber]._id]: [A.current.value, A],
            })
        }
        if (B.current.checked) {
            setSelectedAnswer({
                ...selectedAnswer,
                [questionNumber]: [B.current.value, B],
                [questions[questionNumber]._id]: [B.current.value, B],
            })
        }
        if (C.current.checked) {
            setSelectedAnswer({
                ...selectedAnswer,
                [questionNumber]: [C.current.value, C],
                [questions[questionNumber]._id]: [C.current.value, C],
            })
        }
        if (D.current.checked) {
            setSelectedAnswer({
                ...selectedAnswer,
                [questionNumber]: [D.current.value, D],
                [questions[questionNumber]._id]: [D.current.value, D],
            })
        }
    }
    const handleNext = () => {
        setQuestionNumber(questionNumber + 1)
        displaySelectedQuestions(
            selectedAnswer,
            questionNumber + 1,
            questionNumber
        )
        if (questions.length == questionNumber + 2) {
            setSubmit('Submit')
        }
        if (submit === 'Submit') {
            console.log(questions, 'questions')
            console.log(selectedAnswer, 'selectedAnswer')
            setResult(true)
        }
    }
    const handlePrevious = () => {
        if (questionNumber > 1) {
            setQuestionNumber(questionNumber - 1)
            displaySelectedQuestions(
                selectedAnswer,
                questionNumber - 1,
                questionNumber
            )
        }
        if (submit === 'Submit') setSubmit('Next')
    }

    return (
        <>
            {result ? (
                <ResultPage
                    selectedAnswer={selectedAnswer}
                    questions={questions}
                    status="new"
                    type={type}
                />
            ) : (
                <>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        className={classes.mainLayout}
                    >
                        <Grid item xs={12} sm={4}>
                            <Button
                                className={classes.button}
                                style={{ fontWeight: 'bold', textAlign: 'center' }}
                            >
                                Instruction
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Typography
                                style={{ fontSize: 30,textAlign: 'center', fontWeight: 'bold' }}
                            >
                                Practice Test
                            </Typography>
                        </Grid>
                        <Grid item item xs={12} sm={4}>
                        
                            <div style={{ fontSize: 20, textAlign: 'center',  fontWeight: 'bold'}}>
                                <span style={{fontWeight: 300}} > Time Left -</span>
                             {  }
                                <Timer
                                    initialTime={600000}
                                    direction="backward"
                                >
                                    {() => (
                                        <React.Fragment>
                                            <Timer.Hours /> :
                                            <Timer.Minutes /> :
                                            <Timer.Seconds />
                                        </React.Fragment>
                                    )}
                                </Timer>
                            </div>
                        </Grid>
                    </Grid>
                    {/* <div
                        style={{
                            display: 'flex',
                            direction: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            disableRipple
                            disableFocusRipple
                            variant="contained"
                            className={classes.button}
                        >
                            {questions[0].subject}
                        </Button>
                        <Button
                            disableRipple
                            variant="contained"
                            className={classes.button}
                        >
                            {questions[0].chapter}
                        </Button>
                        <Button
                            disableRipple
                            variant="contained"
                            className={classes.button}
                        >
                            {questions[0].exam}
                        </Button>
                    </div> */}
                    {/* <div style={{ fontSize: 39, textAlign: 'center' }}>
                        <Timer initialTime={600000} direction="backward">
                            {() => (
                                <React.Fragment>
                                    <Timer.Hours /> :
                                    <Timer.Minutes /> :
                                    <Timer.Seconds />
                                </React.Fragment>
                            )}
                        </Timer>
                    </div> */}
                    {/* hi
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton> */}
                    {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            // className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton> */}
                    <Typography variant="h5" className={classes.questionText}>
                        {questionNumber + 1} {') -   '}{' '}
                        {
                            <Latex>
                                {questions[questionNumber].questionText}
                            </Latex>
                        }
                    </Typography>
                    {questions[questionNumber].questionImage!=="" && <img src={`https://edu-solutiion-images.s3.ap-south-1.amazonaws.com/${questions[questionNumber].questionImage}`} />}
                    {/* <IconButton>
                        <MenuButton />
                    </IconButton> */}
                    <div className={classes.optionDiv} onChange={onChangeValue}>
                        {questions[questionNumber].options.map(
                            (option, index) => (
                                <>
                                    <Radio
                                        name="options"
                                        className={classes.options}
                                        ref={refs[index]}
                                        value={option}
                                        bigger
                                    >
                                        <Latex>{option}</Latex>
                                    </Radio>
                                    <br />
                                </>
                            )
                        )}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            direction: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            className={classes.button}
                            onClick={handlePrevious}
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={handleNext}
                            variant="contained"
                            className={classes.button}
                        >
                            {submit}
                        </Button>
                    </div>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={option}
                                selected={option === 'Pyxis'}
                                onClick={handleClose}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    {/* <Drawer variant="persistent"
                anchor="right"
                open={open}
                className={classes.drawer} >
                {questionArr.map((ques) => (
                    <ButtonGroup
                        fullWidth={true}
                        color="#F4A261"
                        aria-label="outlined primary button group"
                    >
                        {ques.map((q) => (
                            <Button variant="contained" style={{ backgroundColor: '#F4A261', color: '#FFFFFF' }} onClick={(e) => handleQuestions(e)}>{q + 1}</Button>
                        ))}
                    </ButtonGroup>
                ))}
                {buttonInfo.map(button => (
                    <Button key={button.label} variant="contained" color={button.color} >{button.label}</Button>
                ))}
            </Drawer> */}
                </>
            )}
        </>
    )
}

export default QuestionLayout
