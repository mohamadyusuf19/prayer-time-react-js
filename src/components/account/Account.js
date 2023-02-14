import React from "react";

import "./account.scss";

const chatIcon = require("../../assets/platform.svg");

const Account = () => {
  return (
    <div className='wrapper-account'>
      <p className='desc'>Semoga Bermanfaat</p>
      <img alt='icon' className='chat' src={chatIcon} />
      <p className='desc'>
        {" "}
        Pengembang Aplikasi <br />
        [Muslim Developer Community] <br />
      </p>
      <p className='desc'>
        Developer Contact <br />
        (ig: mohamadyusuf19)
      </p>
    </div>
  );
};

export default Account;
