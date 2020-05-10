import React from "react";
import PropTypes from "prop-types";
import { FaHome, FaTable, FaMapMarker, FaUser } from "react-icons/fa";

import "./layout.scss";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      {/* <header className='header'>Prayer Time</header> */}
      <div className='children'>{children}</div>
      <footer className='footer'>
        <NavLink exact className='icon' to='/' activeClassName='active-icon'>
          <FaHome />
        </NavLink>
        <NavLink className='icon' to='/maps' activeClassName='active-icon'>
          <FaMapMarker />
        </NavLink>
        <NavLink className='icon' to='/schedules' activeClassName='active-icon'>
          <FaTable />
        </NavLink>
        <NavLink className='icon' to='/account' activeClassName='active-icon'>
          <FaUser />
        </NavLink>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
