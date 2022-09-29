const userData = {
  _id: "",
  name: "",
  email: "",
  application_data: {
    quick_info: [
      {
        title: "interviews_scheduled",
        count: 0,
      },
      {
        title: "applications_sent",
        count: 0,
      },
    ],
    applications: [
      {
        _id: "",
        company_name: "",
        company_info: "",
        job_title: "",
        job_desc: "",
        application_status: "",
        application_journey: [
          {
            event: "",
            schedule: "",
          },
        ],
      },
    ],
  },
};

export default userData;
