import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  sectionProgram: {
    backgroundColor:  'rgba(204, 231, 209, 0.885)',
    backgroundSize: 'cover',
    padding: '80px 0',
    height: 'auto',
    width: 'auto',
  },
  longCopy: {
    lineHeight: '145%', 
    width: '70%',
    marginLeft: '15%',
  },
  fullsize: {
    width: '100%',
    height: '100%',
  },
  row: {
    maxWidth: '1140px',
    margin: '0 auto',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.fullsize}>
      <section className={classes.sectionProgram}>
        <div className={classes.row}>
          <h2>About RBC Impact Project</h2>
          <p className={classes.longCopy}></p>
        </div>

        <div className={classes.row}>
        <p>Project Feed has been created by a group of interns at RBC under the Believe Impact Program hosted by Sarah Wells, a Candian Olympian Athelete. Through this intitative, we want to make a difference in this world. 
          Food Insecurity has been a long running problem in the world today. We believe that everyone has the right to fresh nice meal every day, no matter their circumstances. In today's time. fast food resturances and business dispose of thousands of unsold, perishable food. Our goal at Project Feed is to partner with resturants to help distribute this food to those in need instead of having it go to waste. Even one mean given away can make a huge difference. Slowley Project Feed can really help make sure there are no hungry stomachs left.
        </p>
        </div>
      </section>
    </div>
  );
}

export default About;