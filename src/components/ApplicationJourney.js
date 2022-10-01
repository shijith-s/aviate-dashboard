import React from "react";
import "../styles/applicationDetails.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { timelineElements } from "../utils/utils";
import "react-vertical-timeline-component/style.min.css";

import interviewImg from "../assets/meeting.png";
import assignmentImg from "../assets/clipboard.png";
import onlineTestImg from "../assets/exam.png";
import orientationImg from "../assets/orientation.png";

import "../styles/applicationDetails.css";

function ApplicationJourney({ data }) {
  let iconStyles = {
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const styles = {
    completed: {
      contentStyle: { background: "#20c997", color: "#fff" },
      contentArrowStyle: {
        borderRight: "7px solid  #20c997",
      },
    },
    scheduled: {
      contentStyle: { background: "#4885ed", color: "#fff" },
      contentArrowStyle: {
        borderRight: "7px solid  #4885ed",
      },
    },
    upcoming: {
      contentStyle: { background: "#ddd", color: "#fff" },
      contentArrowStyle: {
        borderRight: "7px solid  #ddd",
      },
    },
  };

  const icons = {
    onlineTest: onlineTestImg,
    assignment: assignmentImg,
    interview: interviewImg,
    orientation: orientationImg,
  };

  console.log(data);

  const titleMaker = (element) => {
    switch (data[element.name].status) {
      case "completed":
        return element.completed + data[element.name].schedule;
      case "scheduled":
        return element.scheduled + data[element.name].schedule;
      case "upcoming":
        return element.upcoming + data[element.name].schedule;
      default:
        return "No event";
    }
  };

  return (
    <div>
      <div className="journeyStart">Congrats, your application has been accepted</div>
      <VerticalTimeline lineColor="#6610f2">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              // date={element.date}
              dateClassName="date"
              className="timelineElement"
              contentStyle={styles[data[element.name].status].contentStyle}
              contentArrowStyle={
                styles[data[element.name].status].contentArrowStyle
              }
              iconStyle={iconStyles}
              icon={<Icon img={icons[element.name]} />}
            >
              <h3 className="timelineElement_title">{titleMaker(element)}</h3>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div className="journeyEnd">Congrats, your application has been accepted</div>
    </div>
  );
}

export default ApplicationJourney;

const Icon = ({ img }) => {
  return (
    <div className="timeline_icon">
      <img src={img} alt="icon" />
    </div>
  );
};
