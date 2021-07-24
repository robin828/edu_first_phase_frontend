import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {useTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import { Tab, Tabs } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "auto",
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#ffffff",
  },
  buttons: {
      color:"#264653",
      fontWeight: 600,
      marginLeft: "9px",
      minWidth: 100
  },
  extraButtons: {
    color:"#264653",
    fontWeight: 600,
    marginLeft: "auto"
  },
  newButtons: {
      color:'red'
  },
  drawer: {
    backgroundColor: '#E76F51'
  },
  drawerItem: {
    color: "white",
  },
  drawerIcon: {
    height: "45px",
  },
}));

export default function Header({setPractice}) {
    const theme = useTheme();

  const classes = useStyles();

  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false) 

  const handleChange = (newValue) => {
	setValue(newValue);
  }
  useEffect(()=>{
    if(window.location.pathname === "/dashboard" && value !== 0 ) setValue(0);
    if(window.location.pathname === "/performance" && value !== 1 ) setValue(1);
    if(window.location.pathname === "/homework" && value !== 2 ) setValue(2);
    if(window.location.pathname === "/practice" && value !== 3 ) setValue(3);
    if(window.location.pathname === "/leaderboard" && value !== 4 ) setValue(4);
    if(window.location.pathname === "/test" && value !== 5 ) setValue(5);
    if(window.location.pathname === "/resources" && value !== 6 ) setValue(6);
    if(window.location.pathname === "/doubts" && value !== 7 ) setValue(7);
    if(window.location.pathname === "/help" && value !== 8 ) setValue(8);
    if(window.location.pathname === "/setting" && value !== 9 ) setValue(9);
  }, [value]);


  const drawer = (
      <>
        <SwipeableDrawer
      open={openDrawer} onClose={()=>setOpenDrawer(false)}
      onOpen={()=>setOpenDrawer(true)} classes={{paper: classes.drawer}} >
        <List disablePadding >
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/dashboard">
            <ListItemText className={classes.drawerItem} disableTypography >Dashboard</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/performance">
            <ListItemText className={classes.drawerItem} disableTypography>Performance</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/Homework">
            <ListItemText className={classes.drawerItem} disableTypography>Homework</ListItemText>
          </ListItem>
          <ListItem onClick={()=>{setOpenDrawer(false);}} divider button  component={Link} to="/practice">
            <ListItemText className={classes.drawerItem} disableTypography>Practice</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/Test">
            <ListItemText className={classes.drawerItem} divider button disableTypography>Test</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/resources">
            <ListItemText className={classes.drawerItem} disableTypography>Resources</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/doubts">
            <ListItemText className={classes.drawerItem} disableTypography>Doubts</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/help">
            <ListItemText className={classes.drawerItem} disableTypography>Help</ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)} divider button  component={Link} to="/setting">
            <ListItemText className={classes.drawerItem} disableTypography>Setting</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={()=>setOpenDrawer(true)} disableRipple className={classes.drawerIconContainer} >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      </>
  )

  const tabs = (
      <>
        <Tabs value={value} onChange={handleChange} >
                <Tab disableRipple className={classes.buttons} component={Link} to="/dashboard" label="Dashboard" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/performance" label="Performance" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/homework" label="Homework" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/practice" label="Practice" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/leaderboard" label="Leaderboard" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/test" label="Test" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/resources" label="Resources" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/doubts" label="Doubts" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/help" label="Help" />
                <Tab disableRipple className={classes.buttons} component={Link} to="/setting" label="Setting" />
          </Tabs>
      </>
  )


  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
        {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </div>
  );
}
