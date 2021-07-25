import React from 'react';
import background from '../assets/vegetables.png'
import { makeStyles } from '@material-ui/core/styles';
import LocationListings from '../Components/LocationListings'

const useStyles = makeStyles(() => ({
  Landing: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  center: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (
  <div className={classes.Landing}>
    <div className={classes.center}>
      <h1>RBC Impact Project</h1>
      <a class="btn btn-ghost" href="#">Volunteer</a>
      <a class="btn btn-ghost" href="#">Organization</a>
    </div>
    <LocationListings />
  </div>
  );
};

export default Landing;