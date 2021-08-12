import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import cobs1 from '../assets/cobs1.jpg';
import cobs2 from '../assets/cobs2.jpg';
import cobs3 from '../assets/cobs3.jpg';
import yasmine from '../assets/yasmine.png';
import wicked from '../assets/wicked.jpg';
import comingSoon from '../assets/comingSoon.png';

const useStyles = makeStyles((theme) => ({
  fullsize: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%'
  },
}));

const getImg = (imgId) => {
  switch(imgId) {
    case 'cobs1': return cobs1;
    case 'cobs2': return cobs2;
    case 'cobs3': return cobs3;
    case 'yasmine': return yasmine;
    case 'wicked': return wicked;
    case 'comingSoon': return comingSoon;
  }
}

let mapVisible = false;
const SingleListing = (props) => {
  const restaurant = props.children;
  const classes = useStyles();

  return (<div onClick={()=>mapVisible=!mapVisible} className={classes.fullsize}>
    {mapVisible? 
    <iframe src={restaurant.mapsId} width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> :
    <img className={classes.fullsize} src={getImg(restaurant.img)}></img> }
  </div>)
};

export default SingleListing;