import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTable,
  FaMapMarker,
  FaInfoCircle,
  FaNewspaper,
} from "react-icons/fa";
import { OnFocusContext } from "../../context/onFocusMapContext";
import "./footer.scss";

const Footer = () => {
  const { onFocus } = useContext(OnFocusContext);
  // React.useEffect(() => {
  //   console.log("coba", onFocus);
  // });

  return (
    <div className='wrapper-footer'>
      <footer className={onFocus ? "footerHide" : "footer"}>
        <NavLink exact className='icon' to='/' activeClassName='active-icon'>
          <div>
            <FaHome />
            <p style={{ margin: 0, fontSize: 11 }}>Beranda</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/news' activeClassName='active-icon'>
          <div>
            <FaNewspaper />
            <p style={{ margin: 0, fontSize: 11 }}>Amalan</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/maps' activeClassName='active-icon'>
          <div>
            <FaMapMarker />
            <p style={{ margin: 0, fontSize: 11 }}>Peta</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/schedules' activeClassName='active-icon'>
          <div>
            <FaTable />
            <p style={{ margin: 0, fontSize: 11 }}>Jadwal</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/account' activeClassName='active-icon'>
          <div>
            <FaInfoCircle />
            <p style={{ margin: 0, fontSize: 11 }}>Info</p>
          </div>
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;
