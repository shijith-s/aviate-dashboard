import React, { useState } from "react";
import "../styles/sidebar.css";

function SideBar() {
  const [activeOptionId, setActiveOptionId] = useState(1);

  const options = [
    { id: 1, title: "Dashboard" },
    {
      id: 2,
      title: "Search Job",
    },
    {
      id: 3,
      title: "Messages",
    },
  ];
  return (
    <div className="sidebar">
      <div className="ourLogo">Aviate</div>
      <div className="sidebar_options">
        {options.map((opt) => (
          <div
            className={`sidebar_option pointer ${
              opt.id === activeOptionId ? "sidebar_option_active" : ""
            }`}
          >
            {opt.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
