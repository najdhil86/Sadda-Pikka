import React from "react";
import { GiTruck } from "react-icons/gi";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <GiTruck size={70} />
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <h2> Welcome to {room} room</h2>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
