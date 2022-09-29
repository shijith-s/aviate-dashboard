import React from "react";
import InfoCard from "../components/InfoCard";
import DataContextProvider from "../context/DataContext";

function Applications() {
  const [data, dispatch] = DataContextProvider();

  let quickInfo = data.application_data ? data.application_data.quick_info : [];
  console.log(data);
  return (
    <div>
      <div className="info_cards">
        {quickInfo.map((item) => (
          <InfoCard info={item} />
        ))}
      </div>
      <div className="applications_list"></div>
    </div>
  );
}

export default Applications;
