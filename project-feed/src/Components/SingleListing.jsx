import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
require('dotenv').config({path: '../.env'});

const SingleListing = (props) => {
  const restaurant = props.restaurant;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.MAPSKEY
  })
  console.log(process.env.MAPSKEY)

  const marker = {
    lat: restaurant.latitude,
    lng: restaurant.longitude
  }

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      // mapContainerStyle={containerStyle}
      center={marker}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >

      <></>
    </GoogleMap>
  ) : 
  <></>
};

export default SingleListing;