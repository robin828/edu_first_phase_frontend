/*eslint-disable*/

import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import attendence from "../../img/attendence.svg";
import announcement from "../../img/announcement.svg";
import TopComponent from "./component/TopComponent";
import CardComponent from "./component/CardComponent";
import HeadingComponent from "./component/HeadingComponent";
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios';
import { getStudentDashboard, getStudentTopCard } from "../../redux/service/studentService";
import { getAnnouncement } from "../../redux/service/announcementService";


const useStyles = makeStyles({
  mainGrid: {
    marginTop: "3rem",
  },
  attendencePaper: {
    height: "200px",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const [name, setName] = useState("")
  const [announcement, setAnnouncement] = useState("")
  const [topCard, setTopCard] = useState({});


  useEffect(()=>{
    getStudentDashboard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
        console.log(res)
    })
    getStudentTopCard({userName:localStorage.getItem('teacherUserName')}).then((res)=>{
      setTopCard(res.data);
    })
}, [])

  // useEffect(()=>{
  //   dispatch(getStudentData({userName: localStorage.getItem('studentUsername'), schoolName: localStorage.getItem('schoolName')}))
  //   dispatch(getAnnouncement({userName: localStorage.getItem('studentUsername'), schoolName: localStorage.getItem('schoolName')}))
  // }, [])
 
  // const studentData = useSelector((state) => (state.studentData.login.existingStudent));
  // const teacherAnnouncement = (useSelector((state) => (state.announcement.announcement["0"])));
  
  // if(!studentData ) {
  //   return null
  // }
  // if(!teacherAnnouncement) {
  //   return null
  // }


  return (
    <>
      
      <TopComponent heading={"Hi  " + topCard.name + "!"} studentClass={topCard.standard} rollNo={topCard.rollNumber}   />
      <Grid
        direction="row"
        container
        justify="space-evenly"
        alignItems="center"
        className={classes.mainGrid}
        spacing={1}
      >
        
          <Grid item md={5} xs={10} >
            <HeadingComponent imagePath={attendence} heading="Attendence" />
            <CardComponent />
          </Grid>
        
          <Grid item md={5} xs={10} >
            <HeadingComponent imagePath={announcement} heading="Announcement" />
            {/* <CardComponent teacherAnnouncement={teacherAnnouncement} /> */}
          </Grid>
        
      </Grid>
    

    
    </>
    
  );
};

export default Dashboard;
