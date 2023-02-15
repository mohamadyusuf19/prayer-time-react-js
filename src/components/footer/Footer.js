import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { OnFocusContext } from "../../context/onFocusMapContext";
import "./footer.scss";
import { Home2, Information, Map, Note1, TaskSquare } from "iconsax-react";

const Footer = () => {
  const location = useLocation();

  const { onFocus } = useContext(OnFocusContext);

  return (
    <div className='wrapper-footer'>
      <footer className={onFocus ? "footerHide" : "footer"}>
        <NavLink exact className='icon' to='/' activeClassName='active-icon'>
          <div>
            <Home2
              size='20'
              color='#055a91'
              variant={location.pathname === "/" ? "Bulk" : "TwoTone"}
            />
            <p style={{ margin: 0, fontSize: 11 }}>Beranda</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/amalan' activeClassName='active-icon'>
          <div>
            <TaskSquare
              size='20'
              color='#055a91'
              variant={location.pathname === "/amalan" ? "Bulk" : "TwoTone"}
            />
            <p style={{ margin: 0, fontSize: 11 }}>Ibadah</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/maps' activeClassName='active-icon'>
          <div>
            <Map
              size='20'
              color='#055a91'
              variant={location.pathname === "/maps" ? "Bulk" : "TwoTone"}
            />
            <p style={{ margin: 0, fontSize: 11 }}>Peta</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/schedules' activeClassName='active-icon'>
          <div>
            <Note1
              size='20'
              color='#055a91'
              variant={location.pathname === "/schedules" ? "Bulk" : "TwoTone"}
            />
            <p style={{ margin: 0, fontSize: 11 }}>Jadwal</p>
          </div>
        </NavLink>
        <NavLink className='icon' to='/info' activeClassName='active-icon'>
          <div>
            <Information
              size='20'
              color='#055a91'
              variant={location.pathname === "/info" ? "Bulk" : "TwoTone"}
            />
            <p style={{ margin: 0, fontSize: 11 }}>Info</p>
          </div>
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;
