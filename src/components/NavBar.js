import React from 'react';
import CustomBtn from './CustomBtn';
import logo from '../logo.svg';
import logoMobile from '../logoMobile.svg';
import { Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

// Import the fonts.css file
import '../fonts.css';

const useStyles = makeStyles({
  bar: {
    paddingTop: "1.725rem",
    background: "linear-gradient(to top, #1A0302, #723017)",
    display: "flex",
    alignItems: "center",
    ['@media (max-width:780px)']: { 
      flexDirection: "column"
    }
  },
  logo: {
    width: "27%",
    margin: "auto",
    paddingBottom: "28px",
    ['@media (max-width:780px)']: { 
      display: "none"
    }
  },
  logoMobile: {
    width: "100%", 
    display: "none", 
    ['@media (max-width:780px)']: { 
      display: "inline-block"
    }
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Bratsy Script Regular",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.8)"
    },
    ['@media (max-width:780px)']: { 
      paddingBottom: "1rem"    
    }
  }
});

function NavBar() {
  const classes = useStyles();

  return (
    <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
      <img src={logo} className={classes.logo} alt="Logo" />
      <a href="https://usdbulls-organization.gitbook.io/usdbull-erc/" className={classes.menuItem}>
        <Typography variant="h6">About</Typography>
      </a>
      <a href="https://usdbulls-organization.gitbook.io/usdbull-erc/tokenomics" className={classes.menuItem}>
        <Typography variant="h6">Tokenomics</Typography>
      </a>
      <a href="https://usdbulls-organization.gitbook.io/usdbull-erc/contract-info" className={classes.menuItem}>
        <Typography variant="h6">Contract</Typography>
      </a>
      <a href="https://usdbulls-organization.gitbook.io/usdbull-erc/roadmap" className={classes.menuItem}>
        <Typography variant="h6">Roadmap</Typography>
      </a>
      <CustomBtn txt="Buy Now" />
    </Toolbar>
  );
}

export default NavBar;

