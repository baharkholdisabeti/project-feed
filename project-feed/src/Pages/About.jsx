import React from 'react';
import background from '../assets/background.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';

const useStyles = makeStyles(() => ({
  sectionProgram: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundAttachment: 'fixed',
    padding: '200px 0',
    height: '100%',
    width: '100%',
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
    <section className={classes.sectionProgram}>
      <div classname={classes.fullsize}>
          <h1>About Project Feed</h1>
          <Card.Text>
          Project Feed has been created by a group of interns at RBC under the Believe Impact Program hosted by Sarah Wells, a Candian Olympian Athelete. Through this intitative, we want to make a difference in our communities. 
              Food Insecurity has been a long running problem in the world today. We believe that everyone has the right to a fresh nice meal every day, no matter their circumstances. In today's time. fast food resturances and business dispose of thousands of unsold, perishable food. Our goal at Project Feed is to partner with resturants to help distribute this food to those in need instead of having it go to waste. Even one mean given away can make a huge difference. Slowly Project Feed can really help make sure there are no hungry stomachs left.
              With the help of our Partners ot provide us with resources, and our amazing Volunteers to distribute the meals, we will be able to improve food security one meal at a time.

          </Card.Text>
          <Card.Footer>ProjectFeedCanada</Card.Footer>
      </div>
    </section>
  );
}

export default About;