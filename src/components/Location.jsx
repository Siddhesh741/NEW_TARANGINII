import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {

const mapStyles = {
  height: '400px',
  width: '100%',
};

const defaultCenter = {
  lat: 18.14380728287821,
  lng: 74.06888677496612,
};

return (
  <LoadScript googleMapsApiKey="YOUR_API_KEY">
    <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  </LoadScript>
);
};


export default Location;