import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25rem',
        },
    },
}));

const Annoucement = ({setAnnouncement}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
        setAnnouncement(event.target.value)
    };

    return (
        <>
            <TextField
                label="Announcement"
                className={classes.root}
                value={value}
                fullWidth
                style = {{width: "35rem"}}
                onChange={handleChange}
            />
        </>
    )
}

export default Annoucement
