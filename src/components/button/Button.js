import React from "react";

import "./button.scss";

const Button = ({ onClick }) => {
  return (
    <div className='button-position' onClick={onClick}>
      Cari Berdasarkan Lokasi Anda
    </div>
  );
};

export default Button;
