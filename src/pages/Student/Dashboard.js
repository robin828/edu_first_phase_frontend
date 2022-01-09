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
import { Typography } from "@material-ui/core";
import PieChart from "./component/GraphComponent/PieChart";


const useStyles = makeStyles({
  mainGrid: {
    marginTop: "3rem",
  },
  attendencePaper: {
    height: "200px",
  },
  info: {
    fontFamily: 'Roboto Slab',
    fontWeight: '400',
    margin:'.5rem'
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
        
          <Grid style={{textAlign: 'center', margin:'.5rem'}} item md={5} xs={10} >
            {/* <HeadingComponent imagePath={attendence} heading="Target Exam" /> */}
            {/* <CardComponent /> */}
            <PieChart correct={134} incorrect={37} left={67} />
            <Typography className={classes.info} >
              Total Question Done
            </Typography>
          </Grid>
        
          <Grid item md={5} xs={10} >
            <HeadingComponent imagePath={attendence} heading="Target Exam" />
            {/* <CardComponent teacherAnnouncement={teacherAnnouncement} /> */}
            <div style={{textAlign: 'center', margin:'.5rem'}} className={classes.info} >
            <Typography className={classes.info} >
              Jee Mains and Advance
            </Typography>
            <Typography className={classes.info}>
              Kishore Vaigyanik Protsahan Yojana (KVPY)
            </Typography>
            <Typography className={classes.info}>
            National Science Olympiad (NSO)
            </Typography>
            <Typography className={classes.info}>
            National Interactive Mathematics Olympiad (NIMO)
            </Typography>
            <Typography className={classes.info}>
              School Boards
            </Typography>
            </div>
            
          </Grid>
        
      </Grid>
    

    
    </>
    
  );
};

export default Dashboard;
