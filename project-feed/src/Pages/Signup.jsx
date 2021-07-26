import React from 'react';
import { Widget } from '@typeform/embed-react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  fullsize: {
    width: '100%',
    height: '93%',
  }
}));

const OrgSignup = () => {
  const classes = useStyles();
  return (
    <Widget id="YifnE5Q4?" className={classes.fullsize} />
  );
};

const VolunteerSignup = () => {
  const classes = useStyles();
  return (
    <Widget id="ybhprPMd" className={classes.fullsize} />
  );
};

export { OrgSignup, VolunteerSignup };