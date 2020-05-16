import React from "react";

import "./time.scss";

const Time = ({ prayerTime, realTime }) => {
  return (
    <div className='card-time'>
      <p className='text-title-iftar'>Segera</p>
      <p className='text-date-iftar-hijri'>Waktu {prayerTime}</p>
      <p className='text-time-iftar'>{realTime}</p>
    </div>
  );
};

export default Time;
