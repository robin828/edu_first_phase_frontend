/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import {
    getTeacherDashboard,
    getStudentOfTeacher,
    getStudentResult,
    getStudentSubject,
} from '../../redux/service/teacherService'
import SingleSelect from '../common/SingleSelect'
import Grid from '@material-ui/core/Grid'
import HeadingComponent from '../Student/component/HeadingComponent'
import Graph1 from '../../img/graph1.svg'
import Loader from '../common/Loader'
import PieChart from '../Student/component/GraphComponent/PieChart'
import Button from '@material-ui/core/Button'
import { getChapters } from '../../redux/service/studentService'

const Performance = () => {
    const [standard, setStandard] = useState([])
    const [resultClass, setResultClass] = useState()
    const [students, setStudents] = useState([])
    const [classTeacher, setClassTeacher] = useState('')

    const [selectedStudent, setSelectedStudent] = useState()
    const [subjects, setSubjects] = useState([])
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const [disable, setDisable] = useState(true)
    const [chapters, setChapters] = useState('')
    const [selectedChapter, setSelectedChapter] = useState('')
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)
    const [unattempted, setUnattempted] = useState(0)
    const [performance, setPerformance] = useState(false)
    const [loading, setLoading] = useState(false)
    const chapterList = []
    const classList = []
    const studentList = []
    const subjectList = []

    useEffect(() => {
        getTeacherDashboard({
            userName: localStorage.getItem('teacherUserName'),
        }).then((res) => {
            console.log(res.data)
            setClassTeacher(res.data.classTeacher)
            localStorage.setItem('subject', res.data.subject)
            res.data.subjectTeacher.forEach((subject) => {
                classList.push({ value: subject, label: subject })
            })
        })
        setStandard(classList)
        getStudentOfTeacher({
            className: resultClass,
            userName: localStorage.getItem('teacherUserName'),
        }).then((res) => {
            console.log(res.data)
            res.data.allStudent.forEach((student) => {
                studentList.push({
                    value: student.userName,
                    label: student.userName,
                })
            })
        })
        setStudents(studentList)
        if (classTeacher === resultClass && classTeacher !== '') {
            setDisable(false)
            getStudentSubject({ userName: selectedStudent }).then((res) => {
                res.data.subjects.forEach((subject) => {
                    subjectList.push({ value: subject, label: subject })
                })
            })
        } else {
            setDisable(true)
        }
        setSubjects(subjectList)
        if (subjects.length > 2) {
            console.log('HI')
            selectedSubjects &&
                getChapters(selectedSubjects).then((res) => {
                    res.data.chaptersName.forEach((chapter) => {
                        chapterList.push({ value: chapter, label: chapter })
                    })
                    setChapters(chapterList)
                })
        } else {
            getChapters(localStorage.getItem('subject')).then((res) => {
                res.data.chaptersName.forEach((chapter) => {
                    chapterList.push({ value: chapter, label: chapter })
                })
                setChapters(chapterList)
            })
        }
    }, [resultClass, selectedStudent, selectedSubjects])

    const handleStudentPerformance = (e) => {
        e.preventDefault()
        setLoading(true)
        getStudentResult({
            userName: selectedStudent,
            subject: selectedSubjects,
            chapter: selectedChapter,
            teacherUserName: localStorage.getItem('teacherUserName'),
        }).then((res) => {
            setCorrect(res.data.correct)
            setIncorrect(res.data.incorrect)
            setUnattempted(res.data.unattempted)
            setPerformance(true)
            setLoading(false)
        })
    }
    return (
        <div>
            <form onSubmit={handleStudentPerformance}>
                {/* <Grid></Grid> */}
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
                            selectLabel={'Class'}
                            optionForUser={standard}
                            setVariable={setResultClass}
                        />
                    </Grid>
                    <Grid item>
                        <SingleSelect
                            selectLabel={'Student'}
                            optionForUser={students}
                            setVariable={setSelectedStudent}
                        />
                    </Grid>
                    <Grid item>
                        <SingleSelect
                            selectLabel={'Subject'}
                            optionForUser={subjects}
                            setVariable={setSelectedSubjects}
                            disable={disable}
                        />
                    </Grid>
                    <Grid item>
                        <SingleSelect
                            selectLabel={'Chapter'}
                            optionForUser={chapters}
                            setVariable={setSelectedChapter}
                        />
                    </Grid>
                    {/* <Grid item>
            <SingleSelect optionForUser={questions} selectLabel="Question" setVariable={setNoOfQuestions} />
          </Grid> */}
                    <Grid item>
                        <Button type="submit"> Search</Button>
                    </Grid>
                </Grid>
            </form>

            {loading ? (
                <Loader />
            ) : (
                performance && (
                    <>
                        <HeadingComponent
                        imagePath={Graph1}
                        heading="See Your Performance"
                    />
                    {
                        correct&&incorrect&&unattempted ? 
                        <>
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
                                {/* <CardComponent /> */}
                            </Grid>
                        </Grid> </>:
                        <p>User does not practice</p>}
                    </>
                )
            )}
        </div>
    )
}

export default Performance
