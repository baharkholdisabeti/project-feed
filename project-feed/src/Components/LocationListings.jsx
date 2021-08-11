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
    width: '100%',
    height: '100%',
    color: theme.palette.text.secondary,
  },
}));

const FormRow = (props) => {
  const threeRestaurants = props.children;
  const classes = useStyles();
  
  return (
    <React.Fragment>
      {threeRestaurants.map((loc, i) => {
        return (<Grid item xs={4} key={i}>
          <Paper className={classes.paper} elevation={3}>
            <SingleListing>
              {loc}
            </SingleListing>
          </Paper>
        </Grid>);
      })}
    </React.Fragment>
  );
}

const LocationListings = (props) => {
  const restaurantLocs = props.children;
  if (!restaurantLocs) return null;
  const restaurants = JSON.parse(restaurantLocs);
  if (!restaurants) return null;
  let restaurantGroups = [];
  for(let i = 0, j = restaurants.length; i<j; i+=3){
    restaurantGroups.push(restaurants.slice(i, i + 3));
  }
  return (
    <Grid container spacing={1}>
      {restaurantGroups.map((group, i) => {
        return (<Grid container item xs={12} spacing={3} key={i}>
          <FormRow>{group}</FormRow>
        </Grid>)
      })}
    </Grid>
  );
}

export default LocationListings;