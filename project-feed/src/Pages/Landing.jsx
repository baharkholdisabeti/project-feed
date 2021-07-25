import React from 'react';
import './Landing.css'
import LocationListings from '../Components/LocationListings'

const Landing = () => {
  return (
  <div className="Landing">
    <div className="center">
      <h1>RBC Impact Project</h1>
      <a class="btn btn-ghost" href="#">Volunteer</a>
      <a class="btn btn-ghost" href="#">Organization</a>
    </div>
    <LocationListings />
  </div>
  );
};

export default Landing;