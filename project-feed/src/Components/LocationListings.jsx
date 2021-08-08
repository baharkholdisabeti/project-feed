import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

const FormRow = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
}

const LocationListings = (props) => {
  const restaurants = props[0];
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <FormRow />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <FormRow />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <FormRow />
      </Grid>
    </Grid>
  );
}

export default LocationListings;