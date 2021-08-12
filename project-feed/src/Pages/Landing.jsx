import React from 'react';
import background from '../assets/background.png'
import { makeStyles } from '@material-ui/core/styles';
import LocationListings from '../Components/LocationListings'
import Button from 'react-bootstrap/Button'

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
          <h1 style={{color: "green" , fontSize:"50px"}}>Project Feed Canada</h1>
          <Button variant="outline-success" style ={{margin: "15px"}}href="/volunteer-signup">Volunteer</Button>
          <Button variant="outline-success" href="/org-signup">Organization</Button>
        </div>
      </div>
      <LocationListings>{restaurants}</LocationListings>
    </div>
  );
};

export default Landing;