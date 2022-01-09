import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import theme from '../../../ui/theme';

const useStyles = makeStyles({

attendenceIcon: {
    marginTop: ".5rem",
    marginBottom: ".5rem",
    width: "46px",
    height: "46px",
  },
  attendenceText: {
    marginLeft: "1rem",
    fontWeight: 700,
    color: "#ffffff",
  },
  rowGrid: {
    background: "#264653",
    width: "100%",
    // marginLeft: '3rem',
    paddingRight: "3rem",
    paddingLeft: "3rem",
  },
  
});

const HeadingComponent = ({ imagePath, heading }) => {

    const classes = useStyles();

    return (
        <>
        <Grid item className={classes.rowGrid}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={imagePath}
                  alt={imagePath}
                  className={classes.attendenceIcon}
                />
              </Grid>
              <Grid item>
                <Typography className={classes.attendenceText} variant="h5">
                {heading}
                </Typography>
              </Grid>
            </Grid>
            </Grid>
        </>
    )
}

export default HeadingComponent
