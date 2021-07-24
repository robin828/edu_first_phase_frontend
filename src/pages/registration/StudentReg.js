import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Axios from 'axios';

const AddUser = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();

  const [openGender, setOpenGender] = React.useState(false);

  const handleCloseGender = () => {
    setOpenGender(false);
  };

  const handleOpenGender = () => {
    setOpenGender(true);
  };


  var [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    schoolName: "",
    gender: "",
    rollNo: "",
    exam:"",
    studentClass: ""
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  
  const fetchApi = async (e) => {
    await Axios.post("http://localhost:7000/api/student/register/", {
      firstName: user.firstName,  
      lastName: user.lastName,
      exam: user.exam,
      phoneNumber: user.phoneNumber,
      studentClass: user.studentClass,
      schoolName: user.schoolName,
      gender: user.gender,
      rollNo: user.rollNo,
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User Registration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value={user.firstName}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={user.lastName}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rollNo"
            name="rollNo"
            label="Roll No"
            fullWidth
            value={user.rollNo}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="exam"
            name="exam"
            label="exam"
            fullWidth
            autoComplete="exam"
            value={user.exam}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="schoolName"
            name="schoolName"
            label="School Name"
            fullWidth
            value={user.schoolName}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="studentClass"
            name="studentClass"
            label="School Name"
            fullWidth
            value={user.studentClass}
            onChange={handleInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label" required>
              Gender
            </InputLabel>
            <Select
              name="gender"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={openGender}
              onClose={handleCloseGender}
              onOpen={handleOpenGender}
              value={user.gender}
              onChange={handleInput}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
          {/* <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            value={user.gender}
            onChange={handleInput}
          /> */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              fetchApi();
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddUser;
