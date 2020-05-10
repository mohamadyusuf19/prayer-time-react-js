import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

const DetailMaps = ({ latitude, longitude }) => {
  const position = [latitude, longitude];
  return (
    <Map center={position} zoom={11}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} />
    </Map>
  );
};

export default DetailMaps;
