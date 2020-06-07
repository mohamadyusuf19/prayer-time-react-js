import React from "react";

import "./account.scss";

const chatIcon = require("../../assets/platform.svg");

const Account = () => {
  return (
    <div className='wrapper-account'>
      <p className='title-schedule'>Assalamualaikum</p>
      <p className='desc'>
        Semoga aplikasi Prayer Time bisa bermanfaat untuk umat. Salam dari
        pengembang aplikasi.
      </p>
      <img alt='icon' className='chat' src={chatIcon} />
      <p className='desc'>[Muslim Developer Community]</p>
    </div>
  );
};

export default Account;
