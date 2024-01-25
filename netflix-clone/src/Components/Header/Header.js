import React from "react";
import "./Header.css";
import Netflixlogo from "../assets/images/Netflixlogo.png";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflixlogo} alt="Netflix logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVshows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Myliste</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* <li><SearchIcon/></li> */}
            {/* <li><NotificationNoneIcone/></li> */}
            {/* <li><AccountBoxIcon/></li> */}
            {/* <li><ArrowDropDownIcon/></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
