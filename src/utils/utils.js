export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const timelineElements = [
  {
    key: 1,
    name: "onlineTest",
    scheduled: "Your online test is scheduled on ",
    completed: "You succesfully completed your online test on ",
    upcoming: "Your online test is not yet scheduled",
  },
  {
    key: 2,
    name: "assignment",
    scheduled: "Your assignment deadline is on ",
    completed: "You succesfully finished your assignment on ",
    upcoming: "Assignment is not given",
  },
  {
    key: 3,
    name: "interview",
    scheduled: "Your interview is scheduled on ",
    completed: "You succesfully completed the interview round on ",
    upcoming: "Your interview is not yet scheduled",
  },
  {
    key: 4,
    name: "orientation",
    scheduled: "Your orientation session is scheduled on ",
    completed: "You succesfully completed your orientation session on ",
    upcoming: "Your orientation session is not yet scheduled",
  },
];
