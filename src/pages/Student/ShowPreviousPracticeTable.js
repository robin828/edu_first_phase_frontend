import React, { useEffect, useState } from 'react'
import {
    getResults,
    getQuestionBy_id,
} from '../../redux/service/studentService'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { CardContent, Grid, Typography, Button } from '@material-ui/core'
import ResultPage from './component/ResultPage'
import HeadingComponent from './component/HeadingComponent'
import Graph from '../../img/graph.svg'
import Loader from '../common/Loader'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#F4A261',
        '&:hover': {
            backgroundColor: '#F4A261',
        },
        margin: '1rem',
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
}))

const columns = [
    { id: 'userName', label: 'User Name', minWidth: 170 },
    { id: 'Date', label: 'Date', minWidth: 170 },
    { id: 'subject', label: 'Subject', minWidth: 100 },
    {
        id: 'chapter',
        label: 'Chapter',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'marks',
        label: 'Marks',
        minWidth: 170,
        align: 'right',
    },
]

const ShowPreviousPracticeTable = () => {
    const classes = useStyles()
    const history = useHistory()

    const dispatch = useDispatch()
    const [results, setResults] = useState([])
    const [practiceResult, setPracticeResult] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState({})
    const questions = useSelector(
        (state) => state.resultQuestions.resultQuestions.questions
    )
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getResults().then((res) => {
            console.log(res.data.results, 'results')
            setResults(res.data.results)
            setLoading(false)
        })
    }, [])
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const openPracticeResult = (questions, selectedAnswer) => {
        console.log(questions)
        dispatch(getQuestionBy_id(questions))
        setSelectedAnswer({ ...selectedAnswer })
        setPracticeResult(true)
    }

    const handleTableClick = (id) => {
        alert(id)
        history.push('/student/homework')
    }

    return (
        <>
            {practiceResult && questions && questions.length > 0 ? (
                <ResultPage
                    questions={questions}
                    selectedAnswer={selectedAnswer}
                    status="old"
                />
            ) : (
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <HeadingComponent
                        imagePath={Graph}
                        className={classes.headText}
                        heading="See Previous"
                    />
                    <div style={{ margin: '2rem' }}>
                        <Paper elevation={5} sx={{ overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{
                                                        minWidth:
                                                            column.minWidth,
                                                    }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {loading ? (
                                            <Loader />
                                        ) : (
                                            results
                                                .slice(
                                                    page * rowsPerPage,
                                                    page * rowsPerPage +
                                                        rowsPerPage
                                                )
                                                .map((row) => {
                                                    return (
                                                        <>
                                                            <TableRow
                                                                hover
                                                                role="checkbox"
                                                                tabIndex={-1}
                                                                key={row.code}
                                                                onClick={() => {
                                                                    history.push(
                                                                        `/student/result/${row._id}`
                                                                    )
                                                                }}
                                                            >
                                                                {columns.map(
                                                                    (
                                                                        column
                                                                    ) => {
                                                                        const value =
                                                                            row[
                                                                                column
                                                                                    .id
                                                                            ]
                                                                        return (
                                                                            <>
                                                                                <TableCell
                                                                                    key={
                                                                                        column.id
                                                                                    }
                                                                                    align={
                                                                                        column.align
                                                                                    }
                                                                                >
                                                                                    {column.format &&
                                                                                    typeof value ===
                                                                                        'number'
                                                                                        ? column.format(
                                                                                              value
                                                                                          )
                                                                                        : value}
                                                                                </TableCell>
                                                                            </>
                                                                        )
                                                                    }
                                                                )}
                                                            </TableRow>
                                                        </>
                                                    )
                                                })
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={results.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShowPreviousPracticeTable
