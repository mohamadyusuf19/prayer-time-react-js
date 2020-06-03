import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTable, FaMapMarker, FaInfoCircle } from "react-icons/fa";
import { OnFocusContext } from "../../context/onFocusMapContext";
import "./footer.scss";

const Footer = () => {
  // const { onFocus } = useContext(OnFocusContext);
  // React.useEffect(() => {
  //   console.log("coba", onFocus);
  // });

  return (
    <div className='wrapper-footer'>
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
          <FaInfoCircle />
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;
