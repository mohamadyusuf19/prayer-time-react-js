import React from "react";

import "./account.scss";

const chatIcon = require("../../assets/chat.svg");

const Account = () => {
  return (
    <div className='wrapper-account'>
      <p className='title-schedule'>Assalamualaikum</p>
      <p className='desc'>
        Semoga aplikasi Ramadhan App bisa bermanfaat untuk umat.
      </p>
      <img alt='icon' className='chat' src={chatIcon} />
    </div>
  );
};

export default Account;
