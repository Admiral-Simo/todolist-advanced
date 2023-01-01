const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export const exactTime = (d) => {
  return `${days[d.getDay()].slice(0, 3)},${monthNames[d.getMonth()].slice(
    0,
    3
  )} ${d.getDate()},${formatAMPM(d)}`;
};

export const getTodayDate = (setState) => {
  const d = new Date();

  setState(`${days[d.getDay()]}, ${monthNames[d.getMonth()]} ${d.getDate()}`);
};
