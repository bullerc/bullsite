import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "48px",
    padding: "0 30px",
    boxSizing: "border-box",
    borderRadius: "12px",
    background: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    transform: "none",
    boxShadow: "none",
    transition: "background .3s, border-color .3s, color .3s",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "#f9f9f9",
      color: "#000000",
    },
  },
  label: {
    textTransform: 'capitalize',
  },
  image: {
    marginRight: '8px',
    width: '10px', // Adjust the width of the image
    height: '10px', // Adjust the height of the image
  },
};

const CustomBtn = withStyles(styles)(({ classes, icon, txt }) => {
  return (
    <Button variant="contained" className={classes.root}>
      <img src={icon} alt="" className={classes.image} />
      {txt}
    </Button>
  );
});

export default CustomBtn;
