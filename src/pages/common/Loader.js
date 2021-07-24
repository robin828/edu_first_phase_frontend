import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
       justifyContent: 'center',
      color: 'red',
      zIndex: 10000
    },
  }));
  

const Loader = () => {
    const classes = useStyles();


    return (
         <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>         
    )
}

export default Loader
