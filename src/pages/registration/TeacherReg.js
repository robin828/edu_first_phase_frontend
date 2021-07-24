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

const AddTeacher = () => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 190,
        },
    }));

    const classes = useStyles();

    const [openGender, setOpenGender] = React.useState(false);
    const [classesInArray, setClassesInArray] = React.useState([]);


    const handleCloseGender = () => {
        setOpenGender(false);
    };

    const handleOpenGender = () => {
        setOpenGender(true);
    };


    var [teacher, setTeacher] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        schoolName: "",
        gender: "",
        teacherClasses: "",
        subject: "",
    });

    // React.useEffect(() => {
    //     Axios.post('http://localhost:5000/api/schools').then(res => console.log(res)).catch(err => console.log(err));
    // }, [])

    // React.useEffect(()=>{
    //     Axios.post('http://localhost:5000/api/school/class', {
    //         school: teacher.schoolName
    //     }).then(res=>console.log(res)).catch(err=>console.log(err));
    // }, [teacher.schoolName]);

    let name, value;
    const handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setTeacher({ ...teacher, [name]: value });
    };

    const fetchApi = async (e) => {
        setClassesInArray(teacher.teacherClasses.split(" "))
        console.log(teacher)
        console.log(classesInArray)
        await Axios.post("http://localhost:6000/api/teacher/register/", {
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            phoneNumber: teacher.phoneNumber,
            teacherClass: classesInArray,
            schoolName: teacher.schoolName,
            subject: teacher.subject,
            gender: teacher.gender
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
                Teacher Registration
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
                        value={teacher.firstName}
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
                        value={teacher.lastName}
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
                        value={teacher.phoneNumber}
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
                        value={teacher.schoolName}
                        onChange={handleInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="teacherClasses"
                        name="teacherClasses"
                        label="Teacher Classes"
                        fullWidth
                        value={teacher.teacherClasses}
                        onChange={handleInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="subject"
                        name="subject"
                        label="Subject"
                        fullWidth
                        value={teacher.subject}
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
                            value={teacher.gender}
                            onChange={handleInput}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            value={Teacher.gender}
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

export default AddTeacher;
