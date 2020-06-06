import React, { useEffect } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DetailMaps = ({ latitude, longitude, label }) => {
  const position = [latitude, longitude];

  useEffect(() => {
    const L = require("leaflet");
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("../../assets/marker-icon.png"),
    });
  }, []);

  return (
    <Map style={{ borderRadius: "5px" }} center={position} zoom={11}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup />
      </Marker>
    </Map>
  );
};

export default DetailMaps;
