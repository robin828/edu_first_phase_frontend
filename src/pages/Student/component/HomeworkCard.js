import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import Timer from 'react-compound-timer'
import Button from '@material-ui/core/Button'
import theme from '../../../ui/theme'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paperGrid: {
        marginTop: '1rem',
        background: '#FFFCF5',
        height: '2rem',
        marginLeft: '2rem',
        [theme.breakpoints.down('md')]: {
            marginBottom: '1rem',
        },
    },
})
const Homeworkcard = ({
    heading,
    score,
    questions,
    setQuestion,
    setStatus,
}) => {
    const classes = useStyles()
    const [time, setTime] = React.useState(0);
    const handleWorksheetQuestions = () => {
        setStatus('Attempted')
        setQuestion(questions)
    }
    React.useEffect(()=>{
      // console.log(Date.now())
      let a = Date.parse("January 9, 2022")
      let b = Date.now()
      setTime(a-b);
      console.log(Math.round(a-b));
      // console.log(a-b);
    }, [])

    console.log(time)
    return (
        <>
            <CardContent className={classes.paperGrid}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography gutterBottom variant="h5" component="h2">
                            {heading}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h5" component="h2">
                            {heading}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {/* <Timer initialTime={Date.parse(score) - Date.now()} direction="backward"> */}
                            {/* {() => (
                                <React.Fragment>
                                    <Timer.Days /> :
                                    <Timer.Hours /> :
                                    <Timer.Minutes /> :
                                    <Timer.Seconds />
                                </React.Fragment>
                            )}
                        </Timer> */}
                    </Grid>
                    {/* { <Grid item><Button onClick={handleWorksheetQuestions}>Start</Button></Grid>} */}
                </Grid>
            </CardContent>
        </>
    )
}

export default Homeworkcard
