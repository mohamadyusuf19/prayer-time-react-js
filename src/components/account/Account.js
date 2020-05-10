import React from "react";

import "./account.scss";

const chatIcon = require("../../assets/chat.svg");

const Account = () => {
  return (
    <div className='wrapper-account'>
      <p className='title-schedule'>Assalamualaikum</p>
      <p className='desc'>
        Semoga aplikasi Ramadhan App bisa bermanfaat. bagi yang ingin request
        daerahnya bisa contact pembagi aplikasi ini.
      </p>
      <img alt='icon' className='chat' src={chatIcon} />
    </div>
  );
};

export default Account;
