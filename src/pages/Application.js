import React from "react";
import { useLocation, useNavigate } from "react-router";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { isEmpty } from "../utils/functions";

function Application() {
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state;

  const backToDashboard = () => {
    navigate("/dashboard");
  };

  if (isEmpty(info)) backToDashboard();

  return (
    <div className="application">
      <div className="backButton" onClick={backToDashboard}>
        <ChevronLeftIcon />
      </div>
      <h1>{info.company_name}</h1>
      <h2>{info.job_title}</h2>
    </div>
  );
}

export default Application;
