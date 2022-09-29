import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">Aviate</div>
      <div className="profile">
        <div className="icon center pointer">
          <PersonIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
