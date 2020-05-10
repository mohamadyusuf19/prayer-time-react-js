import React from "react";

import "./doaberbuka.scss";

const DoaBerbuka = () => {
  return (
    <div className='wrapper-doa'>
      <p className='title-schedule'>Doa Berbuka Puasa</p>
      <p className='text-arabic'>
        ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ
        اللهُ
      </p>
      <p className='text-latin'>
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
