import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { isEmpty } from "../utils/functions";
import ApplicationDetails from "../components/ApplicationDetails";
import JobDescription from "../components/JobDescription";
import CompanyInfo from "../components/CompanyInfo";
import "../styles/application.css";

function Application() {
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state;

  // useEffect(() => {
  //   // window.scrollTo(0);
  // }, []);

  const [currContentId, setcurrContentId] = useState(1);

  const contents = [
    {
      id: 1,
      title: "Application Details",
      active: true,
      component: <ApplicationDetails data={info} />,
    },
    {
      id: 2,
      title: "Job Description",
      active: false,
      component: <JobDescription data={info.job_desc} />,
    },
    {
      id: 3,
      title: "About Company",
      active: false,
      component: <CompanyInfo data={info.company_info} />,
    },
  ];

  const backToDashboard = () => {
    navigate("/dashboard");
  };

  if (isEmpty(info)) backToDashboard();

  const changeContent = (id) => {
    console.log("changing contnet");
    setcurrContentId(id);
  };

  return (
    <div className="application">
      <div className="backButton pointer" onClick={backToDashboard}>
        <ChevronLeftIcon />
      </div>
      <div className="application_titleBar">
        <h1>{info.company_name}</h1>
        <h3>{info.job_title}</h3>
      </div>
      <div className="application_body">
        <div className="buttons">
          {contents.map((btn) => (
            <button
              className={btn.id === currContentId ? "active" : ""}
              onClick={() => changeContent(btn.id)}
            >
              {btn.title}
            </button>
          ))}
        </div>
        <div className="content">
          {
            contents.filter((content) => content.id === currContentId)[0]
              .component
          }
        </div>
      </div>
    </div>
  );
}

export default Application;
