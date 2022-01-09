/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TopComponent from './component/TopComponent'
import Grid from '@material-ui/core/Grid'
import HeadingComponent from './component/HeadingComponent'
import Graph from '../../img/graph.svg'
import Graph1 from '../../img/graph1.svg'
import { useDispatch, useSelector } from 'react-redux'
// import { getStudentData } from '../../redux/service/loginService'
import {
    getStudentClass,
    getStudentTopCard,
} from '../../redux/service/studentService'
import CardComponent from './component/CardComponent'
import LineGraph from '../Student/component/GraphComponent/LineGraph'
import {
    getExam,
    getChapters,
    getChapterWisePerformance,
} from '../../redux/service/studentService'
import Axios from 'axios'
import PieChart from '../Student/component/GraphComponent/PieChart'
import SingleSelect from '../common/SingleSelect'
import PropTypes from 'prop-types'
import { Button, Typography } from '@material-ui/core'
import Loader from '../common/Loader'
// import Axios from 'axios';
const useStyles = makeStyles({
    button: {
        // backgroundColor: '#F4A261',
        margin: '1rem',
        marginTop: '5px',
    },
    mainDiv: {
        marginLeft: '2rem',
    },
    firstDiv: {
        marginBottom: '2rem',
    },
    headingGrid: {
        marginTop: '1.5rem',
    },
    headText: {
        fontFamily: 'Poppins',
        fontWeight: 500,
        background: '#264653',
        color: '#ffffff',
        marginTop: '1rem',
        marginBottom: '1rem',
        paddingRight: '3rem',
        paddingLeft: '3rem',
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
})

const Performance = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [exams, setExams] = useState([])
    const [exam, setExam] = useState([])
    const [subject, setSubject] = useState([])
    const [selectedExam, setSelectedExam] = useState('')
    const [chapters, setChapters] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('')
    const [selectedChapter, setSelectedChapter] = useState('')
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [unattempted, setUnattempted] = useState(0)
    const [phyCorrect, setPhyCorrect] = useState(0)
    const [phyIncorrect, setPhyIncorrect] = useState(0)
    const [phyUnattempted, setPhyUnattempted] = useState(0)
    const [performance, setPerformance] = useState(false)
    const [topCard, setTopCard] = useState({})
    const [loading, setLoading] = useState(false)
    const [studentSubject, setStudentSubject] = useState()

    const examsList = []
    const subjectList = []
    const chapterList = []

    // https://api.myonlineedu.in
    const url = "https://api.myonlineedu.in/api/student/subject"
    // const url = "http://localhost:9000/api/student/subject"

    useEffect(() => {
        getStudentTopCard({
            userName: localStorage.getItem('teacherUserName'),
        }).then((res) => {
            setTopCard(res.data)
        })
        Axios.post(url, {
            userName: localStorage.getItem('studentUsername'),
        }).then((res) => {
            console.log(res.data, ':::')
            setStudentSubject(res.data.subjects)
        })
    }, [])

    // console.log(studentSubject, "{{}}");

    useEffect(() => {
        !selectedExam &&
            getExam('XI').then((res) => {
                setExams(res.data)
                res.data.exams.forEach((exam) => {
                    examsList.push({
                        value: exam.examName,
                        label: exam.examName,
                    })
                })
                setExam(examsList)
            })
        selectedExam &&
            exams.exams.filter((exam) => {
                if (exam.examName === selectedExam) {
                    exam.subjects.forEach((subject) => {
                        subjectList.push({ value: subject, label: subject })
                    })
                    setSubject(subjectList)
                }
            })
        selectedSubject &&
            getChapters(selectedSubject, selectedExam).then((res) => {
                res.data.chaptersName.forEach((chapter) => {
                    chapterList.push({ value: chapter, label: chapter })
                })
                setChapters(chapterList)
            })
    }, [selectedExam, selectedSubject])

    // useEffect(() => {
    //     dispatch(
    //         getStudentData({
    //             userName: localStorage.getItem('studentUsername'),
    //             schoolName: localStorage.getItem('schoolName'),
    //         })
    //     )
    // }, [])

    const showPerformance = (e) => {
        e.preventDefault()
        setLoading(true)
        // console.log('hi')
        console.log(selectedChapter, selectedExam, selectedSubject)
        getChapterWisePerformance({
            userName: localStorage.getItem('studentUsername'),
            selectedChapter,
            selectedExam,
            selectedSubject,
        }).then((res) => {
            setCorrect(res.data.correct)
            setIncorrect(res.data.incorrect)
            setUnattempted(res.data.unattempted)
            setPerformance(true)
            setLoading(false)
        })
        getChapterWisePerformance({
            userName: "",
            selectedChapter,
            selectedExam,
            selectedSubject,
        }).then((res) => {
            setPhyCorrect(res.data.correct)
            setPhyIncorrect(res.data.incorrect)
            setPhyUnattempted(res.data.unattempted)
            // setPerformance(true)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        // getChapterWisePerformance({
        //     userName: localStorage.getItem('studentUsername'),
        //     selectedChapter,
        //     selectedExam: "JEE Mains",
        //     selectedSubject: "Physics",
        // }).then((res) => {
        //     setPhyCorrect(res.data.correct)
        //     setPhyIncorrect(res.data.incorrect)
        //     setPhyUnattempted(res.data.unattempted)
        //     setPerformance(true)
        //     setLoading(false)
        // })
    }, [])

    // let classData = studentData.subject;
    // console.log(classData, typeof(classData));

    return (
        <>
            <TopComponent
                heading={'Hi  ' + topCard.name + '!'}
                studentClass={topCard.standard}
                rollNo={topCard.rollNumber}
            />

            <form onSubmit={showPerformance}>
                <Grid
                    spacing={3}
                    style={{ marginTop: '10px' }}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <SingleSelect
                            optionForUser={exam}
                            selectLabel="Exam"
                            setVariable={setSelectedExam}
                        />
                    </Grid>
                    <Grid item>
                        <SingleSelect
                            optionForUser={subject}
                            selectLabel="Subject"
                            setVariable={setSelectedSubject}
                        />
                    </Grid>
                    <Grid item>
                        <SingleSelect
                            optionForUser={chapters}
                            selectLabel="chapter"
                            setVariable={setSelectedChapter}
                        />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.button}
                    style={{ textAlign: 'center' }}
                >
                    <Button type="submit"> Search</Button>
                </Grid>
            </form>
            <br />

            {loading ? (
                <Loader />
            ) : (
                performance && (
                    <>
                        {/* <HeadingComponent
                            imagePath={Graph1}
                            heading="See Your Performance"
                        /> */}

                        <Grid
                            container
                            justify="space-evenly"
                            alignItems="center"
                            direction="row"
                        >
                            <Grid item sm={12} md={5}>
                                <PieChart
                                    correct={correct}
                                    incorrect={incorrect}
                                    left={unattempted}
                                />
                            </Grid>
                            <Grid item xs={0} md={5}>
                                <PieChart
                                    correct={phyCorrect}
                                    incorrect={phyIncorrect}
                                    left={phyUnattempted}
                                />
                            </Grid>
                        </Grid>
                        <div style={{textAlign:'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                            <Typography>Comaprision</Typography>
                            <div style={{textAlign:'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div>
                                    <Typography>Student</Typography>
                                </div>
                                <div>
                                    <Typography>Average</Typography>
                                </div>
                            </div>
                        </div>
                    </>
                )
            )}
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                direction="row"
            >
                <Grid item sm={12} md={5}>
                    <LineGraph title={'Ideal Accuracy'} />
                </Grid>
                <Grid item xs={0} md={5}>
                    <LineGraph title={'Your Accuracy'} />
                </Grid>
            </Grid>
            {/* {studentSubject&&studentSubject.map(sub => (
                <Grid
                container
                justify="space-evenly"
                alignItems="center"
                direction="row"
            >
                <Grid item sm={12} md={5}>
                    <PieChart
                        correct={phyCorrect}
                        incorrect={phyIncorrect}
                        left={phyUnattempted}
                    />
                </Grid>
                <Grid item xs={0} md={5}>
                    <LineGraph title={'Your Accuracy'} />
                </Grid>
            </Grid>
            ))} */}

            {/* < LineGraph /> */}
        </>
    )
}

Performance.propTypes = {
    studentData: PropTypes.object.isRequired,
}

export default Performance
