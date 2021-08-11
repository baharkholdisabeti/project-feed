import React from 'react';
import background from '../assets/vegetables.png'
import { makeStyles } from '@material-ui/core/styles';
import LocationListings from '../Components/LocationListings'

const useStyles = makeStyles(() => ({
  Landing: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundAttachment: 'fixed',
  },
  fullsize: {
    width: '100%',
    height: '100%',
  },
  center: {
    margin: "0",
    position: "relative",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  }
}));

const Landing = (props) => {
  const restaurants = props.restaurants;
  const classes = useStyles();

  return (
    <div className={`${classes.Landing} ${classes.fullsize}`}>
      <div className={classes.fullsize}>
        <div className={classes.center}>
          <h1>RBC Impact Project</h1>
          <a className='btn' href="/volunteer-signup">Volunteer</a>
          <a className='btn' href="/org-signup">Organization</a>
        </div>
      </div>
      <LocationListings>{restaurants}</LocationListings>
    </div>
  );
};

export default Landing;