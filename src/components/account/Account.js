import React from "react";

import "./account.scss";

const chatIcon = require("../../assets/platform.svg");

const Account = () => {
  return (
    <div className='wrapper-account'>
      <p className='desc'>
        Semoga bermanfaat
        <br />
        Salam dari pengembang aplikasi.
      </p>
      <img alt='icon' className='chat' src={chatIcon} />
      <p className='desc'>[Muslim Developer Community]</p>
    </div>
  );
};

export default Account;
