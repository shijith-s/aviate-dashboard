import React from "react";
import "../styles/infoCard.css";

function InfoCard({ item, count }) {
  console.log(item, count);
  return (
    <div className={`infoCard ${item.className}`}>
      <div className="infoIcon">{item.icon}</div>
      <div className="infoData">
        <h4 className="title">{item.title}</h4>
        <p className="count">{count}</p>
      </div>
    </div>
  );
}

export default InfoCard;
