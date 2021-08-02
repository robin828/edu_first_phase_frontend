/*eslint-disable*/

import React, {useEffect, useState} from 'react';
import TopComponent from '../Student/component/TopComponent';
import Grid from '@material-ui/core/Grid';
import Annoucement from './components/Annoucement';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CardComponent from './components/CardComponent'
import NativeSelect from '@material-ui/core/NativeSelect';
import {useSelector, useDispatch} from 'react-redux'
import Axios from 'axios'
import SingleSelect from '../common/SingleSelect';

import { sendAnnouncement } from "../../redux/service/announcementService";
import { getTeacherDashboard } from '../../redux/service/teacherService';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    announcement: {
        marginTop: "2rem"
    }
}));

const Dashboard = () => {
    const classes = useStyles();
    // const [standard, setStandard] = React.useState("");
    const [announcement, setAnnouncement] = React.useState();
    const [teacherData, setTeacherData] = React.useState([]);
    const [name, setName] = useState("")
    const [announcementClass, setAnnouncementClass] = useState();
    const classList = [];
    const [standard, setStandard] = useState([]);
    // const dispatch = useDispatch();
    // dispatch(getTeacherDashboard({userName: localStorage.getItem('teacherUserName')}))
    // const teacherData = useSelector((state) => (state.teacherData.login.existingTeacher));

    console.log("*****");

    useEffect(()=>{
        console.log("hi")
        getTeacherDashboard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
            console.log(res.data)
            setName(res.data.name)
            res.data.subjectTeacher.forEach(subject=>{classList.push({value: subject, label: subject})})
        })
        setStandard(classList);
    }, [])

    // console.log(teacherData)

    // if(!teacherData) {
    //     return null;
    // }

    // const handleChange = (event) => {
    //     setStandard(event.target.value);
    //     console.log(event.target.value)
    // };

    // const handleAnnouncement = () => {
    //     console.log('click')
    //     console.log(standard)
    //     Axios.post('http://localhost:5000/api/teacher/announcement', {
    //         announcement, standard, userName: localStorage.getItem('teacherId')
    //     }).then(res=>console.log(res)).catch(err=>console.log(err));
    //     console.log('clicks')

    // }
    return (
        <div>
            <TopComponent heading={`Hi ${name.split(" ")[0]}`} />
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item>
                    <CardComponent />
                </Grid>
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        className={classes.announcement}
                        >
                        <Grid item>
                            <Annoucement setAnnouncement={setAnnouncement} />
                        </Grid>
                        <Grid item>
                            {/* <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-helper">Standard</InputLabel>
                                <NativeSelect
                                    value={standard}
                                    onChange={handleChange}
                                > */}
                                    {/* <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option> */}
                                    {/* {
                                        teacherData.teacherClass.map((cls, index) => (
                                            <option key={index} value={cls}>{cls}</option>
                                        ))
                                    } */}
                                {/* </NativeSelect>
                            </FormControl> */}
                            <SingleSelect selectLabel={"Class"} optionForUser={standard} setVariable={setAnnouncementClass} />
                        </Grid>
                    </Grid>
                    <Button >Send</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
