import React from 'react';
import background from '../assets/background.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

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
          <div style={{ margin: "20px" }}>
            <h2> Project Feed has been created by a group of interns at RBC under the Believe Impact Program hosted by Sarah Wells, a Candian Olympian Athelete</h2>
            <p style={{fontSize: "20px"}}>
            Through this intitative, we want to make a difference in our communities.
                Food Insecurity has been a long running problem in the world today. We believe that everyone has the right to a fresh nice meal every day, no matter their circumstances. In today's time. fast food resturances and business dispose of thousands of unsold, perishable food. Our goal at Project Feed is to partner with resturants to help distribute this food to those in need instead of having it go to waste. Even one mean given away can make a huge difference. Slowly Project Feed can really help make sure there are no hungry stomachs left.
                With the help of our Partners ot provide us with resources, and our amazing Volunteers to distribute the meals, we will be able to improve food security one meal at a time.

            </p>

        </div>
        <div style={{ margin: "50px" }}>
          <h1>How Project Feed Works</h1>
          <CardGroup>
            <Card border="success" bg={'success'}  style={{ width: '18rem', margin: '2rem' }}>
              <Card.Img variant="top"/>
              <Card.Body>
                <Card.Title  style={{ color: 'green', fontSize: '4rem'}}>1</Card.Title>
                <Card.Text style={{ fontSize: '1.2rem' }}>
                Partnered restuarants and grocery stores are added onto the Project Feed Website and Socials! 
                </Card.Text>
              </Card.Body>
             
            </Card>
            <Card border="success" bg={'success'}  style={{ width: '18rem', height: "15rem " , margin: '2rem' }}>
              <Card.Body>
                <Card.Title  style={{ color: 'green', fontSize: '4rem'}}>2</Card.Title>
                <Card.Text style={{ fontSize: '1.2rem' }}>
                Volunteers (public individuals or other organizations) are notified on our website about the avaliable food at one of our locations!{' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="success" bg={'success'} style={{ width: '18rem', margin: '2rem' }}>
           
              <Card.Body>
                <Card.Title  style={{ color: 'green', fontSize: '4rem'}}>3</Card.Title>
                <Card.Text style={{ fontSize: '1.2rem' }}>
                Our registered Volunteers will take the initative to collect avaliable food and distribute it to the homeless community and those who are of need of a fresh meal
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>

      </div>
    </section>
  );
}

export default About;