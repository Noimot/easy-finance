import { faAngleDown, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@mui/material/Avatar";
import React from "react";
import "./style.css";

export const Navbar = () => {
  return (
    <div className="navstyle">
      <ul className="moveLeft align">
        <li className="flex">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            style={{ transform: "rotate(-45deg)"}}
          />
          <p>Support</p>
        </li>
        <li className="flex align pborder">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 25, height: 25 }}
          />
          <p>Ayomide</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </li>
      </ul>
    </div>
  );
};

export const NavDropdown = () => {
  return (
    <div>
      <ul>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};
