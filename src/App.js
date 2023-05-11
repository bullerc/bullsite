import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
import overlayImage from './logoMobile.svg';
import etherscanImage from './etherscan.svg';
import uniImage from './uni.svg';
import dexImage from './dex.svg';
import cmcImage from './cmc.svg';
import cgImage from './CG.svg';






const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#ffffff",
    },
    secondary: {
      main:"#ffffff",
    },
  },
  typography: {
    fontFamily: [
      'Robtronika-4Bq8p'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      
      },
    h5: {
      fontWeight: 50,
      fontSize: 15,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
    position: 'relative', // Added position relative to enable overlay positioning
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
  image: {
    width: "50px",
    height: "50px",
    margin: "0 10px",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.15,
    backgroundImage: `url(${overlayImage})`,
    backgroundSize: 'cover',
    zIndex: -1,
  },
});


function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <div className={classes.overlay}></div>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h2" className={`${classes.bigSpace} bull-text`} color="primary">
            $bull
          </Typography>
          
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            The ultimate powerhouse in the crypto market. This revolutionary ERC20 token aims to change the game with its unique Timelok function. MW tokens are locked right from contract deployment leaving no tokens unlocked for a SAFU experience.  Boasting 0% tax no $Bull shit trading. Get ready to unleash the bullish potential & get ready for some serious gains. 
          </Typography>
        </div>
        <br></br>
  
        <div className={classes.grid}>
        <a href="https://example.com/etherscan">
          <img src={etherscanImage} alt="" className={classes.image} />
        </a>

        <a href="https://example.com/etherscan">
          <img src={uniImage} alt="" className={classes.image} />
        </a>

        <a href="https://example.com/etherscan">
          <img src={dexImage} alt="" className={classes.image} />
        </a>

        <a href="https://example.com/etherscan">
          <img src={cmcImage} alt="" className={classes.image} />
        </a>

        <a href="https://example.com/etherscan">
          <img src={cgImage} alt="" className={classes.image} />
        </a>
        </div>
  
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid image={""} btnTitle="CEX 1" />
          <Grid image={""} btnTitle="CEX 2" />
          <Grid image={""} btnTitle="CEX 3" />
        </div>
        
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid image={""} btnTitle="CEX 4" />
          <Grid image={""} btnTitle="CEX 5" />
          <Grid image={""} btnTitle="CEX 6" />
        </div>
  
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
  
}

export default App;