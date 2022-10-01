import React from "react";

function CompanyInfo({ data }) {
  return (
    <div>
      <h2>About Company</h2>
      <p>{data}</p>
    </div>
  );
}

export default CompanyInfo;
