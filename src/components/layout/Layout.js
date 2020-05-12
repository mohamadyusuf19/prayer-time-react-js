import React from "react";
import PropTypes from "prop-types";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='children'>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
