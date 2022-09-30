import React from "react";
import rejectionImg from "../assets/rejection.jpg";
import pendingImg from "../assets/pending.jpg";
import "../styles/applicationDetails.css";

function ApplicationDetails({ data }) {
  console.log(data);
  const component = () => {
    if (!data) return <h2>Loading...</h2>;
    switch (data.application_status) {
      case "rejected":
        return <Rejection />;
      case "pending":
        return <Pending />;
      default:
        //   <Acceptance />;
        return "acceptance";
    }
  };

  return (
    <div>
      <h2>Application Details</h2>
      {component()}
    </div>
  );
}

export default ApplicationDetails;

const Rejection = () => {
  return (
    <div className="rejection">
      <p className="sentence">
        Sorry, your application has not been accepted this time
      </p>
      <div className="image">
        <img src={rejectionImg} alt="comforting" />
      </div>
    </div>
  );
};

const Pending = () => {
  return (
    <div className="pending">
      <p className="sentence">Your application is still on progress</p>
      <div className="image">
        <img src={pendingImg} alt="sand clock" />
      </div>
    </div>
  );
};
