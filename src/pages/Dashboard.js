import React, { useState } from "react";
import InfoCard from "../components/InfoCard";
import DataContextProvider from "../context/DataContext";
import ApplicationCard from "../components/ApplicationCard";
import "../styles/dashboard.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TelegramIcon from "@mui/icons-material/Telegram";

function Dashboard() {
  const [data, dispatch] = DataContextProvider();
  const [expand, setExpand] = useState(false);

  const recommendedJobs = data.recommendedJobs;

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

  const listShrinker = () => {
    setExpand((exp) => !exp);
  };

  console.log(data);
  return (
    <div className="dashboard">
      <div className="info_cards">
        {cards.map((item) => (
          <InfoCard item={item} count={quickInfo[item.varname]} />
        ))}
      </div>
      <div>
        <h3>Applications</h3>
        <div
          className={`applications_list ${
            expand ? "" : "applications_list_shrink"
          }`}
        >
          {applications.map((item) => (
            <ApplicationCard info={item} />
          ))}
        </div>
        <p onClick={listShrinker} className="pointer showMoreBtn">
          {expand ? "Show less" : "Show more"}
        </p>
      </div>

      <h3>Recommended Jobs</h3>
      <div className="recommended_jobs">
        {recommendedJobs.map((job) => (
          <JobCard data={job} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

const JobCard = ({ data }) => {
  return (
    <div className="jobCard">
      <h3 className="jobCard_title">{data.company_name}</h3>
      <h5 className="jobCard_stipend">{data.stipend}</h5>
      <p className="jobcard_desc">{data.desc}</p>
      <div className="jobCard_details">
        <p>{data.location}</p>
        <p>{data.jobType}</p>
      </div>
      <button className="jobCard_applyBtn">Apply Now</button>
    </div>
  );
};
