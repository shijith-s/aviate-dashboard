import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/header.css";

function Header({ data }) {
  const name = data.name;
  const email = data.email;
  return (
    <div className="header">
      <div className="header_dummy"></div>
      <div className="header_content">
        <div className="profile pointer" title={`Logged in as ${name}`}>
          <div className="username">{name}</div>
          <div className="icon center pointer">
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
