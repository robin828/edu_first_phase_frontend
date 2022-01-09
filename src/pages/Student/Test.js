import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

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
    test: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // alignContent: 'center'
        height: '91vh',
        background: '#F4A261'
    },
    paper: {
        width: '30rem',
        height: '8rem',
        // textAlign: 'center'
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '2.5rem'
    },
    info: {
        fontFamily: 'Roboto Slab',
        fontWeight: '400',
        margin:'.5rem'
    },
})
const Test = () => {
    const classes = useStyles()

    return (
        <div className={classes.test} >
            <Paper className={classes.paper}  elevation={5} >
            <Typography className={classes.info} >
            No Test Soon! Keep on practice
            <br />
            <span style={{fontWeight: '600', fontSize: '1rem'}}> Test Series Will start in August </span></Typography> 
            {/* <br /> */}
            {/* <Typography className={classes.info} >
            Test Series Will start in August</Typography>  */}
            </Paper>
        </div>
    )
}

export default Test
