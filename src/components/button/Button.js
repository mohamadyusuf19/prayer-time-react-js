import React from "react";

import "./button.scss";

const Button = ({ onClick }) => {
  return (
    <div className='button-position' onClick={onClick}>
      Cari Berdasarkan Lokasi Saya
    </div>
  );
};

export default Button;
