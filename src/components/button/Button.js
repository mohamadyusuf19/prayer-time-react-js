import React from "react";

import "./button.scss";

const Button = ({ onClick }) => {
  return (
    <div className='button-position' onClick={onClick}>
      Cari Berdasarkan Posisi
    </div>
  );
};

export default Button;
