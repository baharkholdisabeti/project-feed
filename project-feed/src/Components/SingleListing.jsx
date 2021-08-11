import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const SingleListing = (props) => {
  const restaurant = props.children;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'process.env.REACT_APP_MAPSKEY'
  })

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
    <GoogleMap className='fullsize'
      mapContainerStyle={containerStyle}
      center={marker}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker className='fullsize' position={{lat: restaurant.latitude, lng: restaurant.longitude}}/>
      <></>
    </GoogleMap>
  ) : 
  <></>
};

export default SingleListing;