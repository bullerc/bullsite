import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../logoMobile.svg';
import githubImage from '../github.png';
import twitterImage from '../twitter.png';
import telegramImage from '../telegram.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1A0302', // Change the background color here
    height: '75px', // Adjust the height here
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 16px',
    overflow: 'hidden', // Hide the overflow on the bottom
  },
  logo: {
    marginRight: '16px',
    width: '150px', // Adjust the width of the logo here
    height: '150px', // Adjust the height of the logo here
    paddingBottom: '5px', // Add padding to the bottom of the logo
    overflow: 'visible', // Make the overflow visible for the logo
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingLeft: '382px', // Add left padding of 20 pixels
  },
  
  image: {
    width: '36px',
    height: '36px',
    fill: 'currentColor',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
        <img src={logoImage} alt="" className={classes.logo} />
      </a>
      <div className={classes.container}>
        <a href="http://github.com/bullerc" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction
            label="GitHub"
            value="github"
            icon={<img src={githubImage} alt="" className={classes.image} />}
          />
        </a>
        <a href="http://twitter.com/bull_erc" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction
            label="Twitter"
            value="twitter"
            icon={<img src={twitterImage} alt="" className={classes.image} />}
          />
        </a>
        <a href="https://t.me/bull_erc" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction
            label="Telegram"
            value="telegram"
            icon={<img src={telegramImage} alt="" className={classes.image} />}
          />
        </a>
      </div>
    </BottomNavigation>
  );
}


export default Footer;
