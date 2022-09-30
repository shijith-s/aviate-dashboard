import React from "react";
import InfoCard from "../components/InfoCard";
import DataContextProvider from "../context/DataContext";
import ApplicationCard from "../components/ApplicationCard";
import "../styles/dashboard.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TelegramIcon from "@mui/icons-material/Telegram";

function Dashboard() {
  const [data, dispatch] = DataContextProvider();

  const cards = [
    {
      title: "Interviews Scheduled",
      varname: "interviews_scheduled",
      className: "interviews_scheduled",
      icon: <CalendarMonthIcon />,
    },
    {
      title: "Applications Sent",
      varname: "applications_sent",
      className: "applications_sent",
      icon: <TelegramIcon />,
    },
  ];

  let quickInfo = data.application_data.quick_info;
  let applications = data.application_data.applications;

  console.log(data);
  return (
    <div className="dashboard">
      <div className="info_cards">
        {cards.map((item) => (
          <InfoCard item={item} count={quickInfo[item.varname]} />
        ))}
      </div>
      <h3>Applications</h3>
      <div className="applications_list">
        {applications.map((item) => (
          <ApplicationCard info={item} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
