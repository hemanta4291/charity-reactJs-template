import React from 'react'
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    Marker,
  } from "react-google-maps";


  const GoogleMapWithMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  ));
  


export default GoogleMapWithMarker