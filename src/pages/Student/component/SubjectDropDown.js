import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {

    
      borderRadius: 4,
      position: 'relative',

      backgroundColor: "#F4A261",
      border: '1px solid #F4A261',
      fontSize: 16,

      padding: '10px 32px 10px 30px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#F4A261',
        boxShadow: '0 0 0 0.2rem #F4A261',
      },
    },
    
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    
    },
  }));
  
  
const SubjectDropDown = ({heading, classData}) => {

    const classes = useStyles();
    const [Subject, setSubject] = React.useState('');
    const handleChange = (event) => {
      setSubject(event.target.value);
    };

    return (
        <div>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={Subject}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option aria-label="Select Class" value="Select Class">{Subject}</option>
            <option aria-label="Select Class" value="Select Class">Physics</option>
            <option aria-label="Select Class" value="Select Class">Chemistry</option>
            <option aria-label="Select Class" value="Select Class">Maths</option>
            
          </NativeSelect>
        </FormControl>
      </div>
    )
}

export default SubjectDropDown
