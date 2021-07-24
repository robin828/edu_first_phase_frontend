import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#F4A261",
    "&:hover": {
      backgroundColor: "#F4A261",
    },
    margin: "1rem",
  },
  mainDiv: {
    marginLeft: "2rem",
  },
  firstDiv: {
    marginBottom: "2rem",
  },
  headingGrid: {
    marginTop: "1.5rem",
  },
});

const SelectButton = ({ buttonName, menuItem }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={(event) => handleClick(event)}
        className={classes.button}
      >
        {buttonName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>{menuItem}</MenuItem>
        {/* <MenuItem onClick={handleClose}>Maths</MenuItem>
          <MenuItem onClick={handleClose}>Biology</MenuItem>
          <MenuItem onClick={handleClose}>Accounts</MenuItem> */}
      </Menu>
    </div>
  );
};

export default SelectButton;
