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
    <div className="wrapper-footer">
      <footer className="footer">
        <NavLink exact className="icon" to="/" activeClassName="active-icon">
          <div>
            <FaHome />
            <p style={{ margin: 0, fontSize: 11 }}>Beranda</p>
          </div>
        </NavLink>
        <NavLink className="icon" to="/maps" activeClassName="active-icon">
          <div>
            <FaMapMarker />
            <p style={{ margin: 0, fontSize: 11 }}>Peta</p>
          </div>
        </NavLink>
        <NavLink className="icon" to="/schedules" activeClassName="active-icon">
          <div>
            <FaTable />
            <p style={{ margin: 0, fontSize: 11 }}>Jadwal</p>
          </div>
        </NavLink>
        <NavLink className="icon" to="/account" activeClassName="active-icon">
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
