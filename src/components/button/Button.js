import React from "react";

import "./button.scss";

const Button = () => {
  const onClick = () => {
    console.log("onClick");
    navigator.geolocation.getCurrentPosition(
      function (position) {
        alert(position.coords.latitude);
        alert(position.coords.longitude);
      },
      function (err) {
        console.log(err);
      },
      { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 }
    );
  };
  return (
    <div className='button-position' onClick={onClick}>
      Cari Berdasarkan Posisi
    </div>
  );
};

export default Button;
