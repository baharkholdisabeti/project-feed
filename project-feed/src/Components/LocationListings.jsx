import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SingleListing from './SingleListing';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const LocationListings = (props) => {
  const restaurants = props.restaurants;
  if (!restaurants) return null;
  return (
    <div>
      {Array.from(restaurants).map(restaurant => {
        return <div className='col-lg-4' key={restaurant.id}>
          <SingleListing restaurant={restaurant}/>
        </div>
      })}
    </div>
  );
}

export default LocationListings;