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

    const [schoolName, setSchoolName] = useState("")
    const [schoolClasses, setSchoolClasses] = useState("")

    const fetchApi = async (e) => {
        const mainClasses = schoolClasses.split(" ");
        await Axios.post("http://localhost:5000/api/school/register/", {
            schoolClasses: mainClasses,
            schoolName: schoolName
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
        // console.log(schoolName, schoolClasses);
        // let mainClasses = schoolClasses.split(" ");
        // console.log(mainClasses)

    };

    // console.log(schoolName, schoolClasses);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                School Registration
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="schoolName"
                        name="schoolName"
                        label="School name"
                        fullWidth
                        autoComplete="given-name"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="schoolClasses"
                        name="schoolClasses"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        value={schoolClasses}
                        onChange={(e) => setSchoolClasses(e.target.value)}
                    />
                </Grid>

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
        </React.Fragment>
    );
};

export default AddUser;
