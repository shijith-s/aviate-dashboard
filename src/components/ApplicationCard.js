import React from "react";
import "../styles/applicationCard.css";
import { capitalize } from "../utils/functions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router";

function ApplicationCard({ info }) {
  const navigate = useNavigate();
  const classname = {
    accepted: "green",
    pending: "yellow",
    rejected: "red",
  };
  const reDirect = () => {
    console.log("navigating");
    navigate("/application", {
      state: info,
    });
  };
  return (
    <div className="applicationCard pointer" onClick={reDirect}>
      <div className="jobInfo">
        <h2 className="company">{info.company_name}</h2>
        <p className="jobTitle">{info.job_title}</p>
      </div>

      <div className="applicationCard_right">
        <div className={`status ${classname[info.application_status]}`}>
          {capitalize(info.application_status)}
        </div>
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default ApplicationCard;
