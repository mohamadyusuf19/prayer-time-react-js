import React from "react";

import "./doaberbuka.scss";

const doaIcon = require("../../assets/doa.jpg");

const DoaBerbuka = () => {
  return (
    <div className='wrapper-doa'>
      <p className='title-schedule'>Doa Berbuka Puasa</p>
      <div className='doa' />
      <p className='text-arabic'>
        Dzahabaz zhama’u wabtallatil ‘uruqu wa tsabatal ajru, insyaallah
      </p>
      <p className='desc'>
        Artinya: "Telah hilang rasa haus, telah basah urat-urat, dan telah pasti
        ganjaran, dengan kehendak Allah Ta’ala.[HR. Abu Daud]”
      </p>
    </div>
  );
};

export default DoaBerbuka;
