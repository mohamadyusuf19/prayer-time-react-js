import isEmpty from "lodash/isEmpty";
import moment from "moment";
export const formatDay = (params) => {
  switch (params) {
    case "Sunday":
      return "Ahad";
    case "Monday":
      return "Senin";
    case "Tuesday":
      return "Selasa";
    case "Wednesday":
      return "Rabu";
    case "Thursday":
      return "Kamis";
    case "Friday":
      return "Jum`at";
    case "Saturday":
      return "Sabtu";
    default:
      return null;
  }
};

export const getHourAndMinutes = (params) =>
  isEmpty(params) ? null : params.split(" ")[0];

export const unixTime = (date) =>
  isEmpty(date) ? null : moment.unix(date).format("MM/DD/YYYY");

export const formatDateCompare = (date) =>
  moment(date).format("MM/DD/YYYY HH:mm:ss");

export const setDurationTime = (timeFinish) => {
  const date = new Date();
  const formatDate = moment(date).format("YYYY-MM-DD");
  let timeStartNew = moment(date).format("YYYY-MM-DD HH:mm:ss");
  let timeFinishNew = isEmpty(timeFinish) ? null : timeFinish.split(" ")[0];
  console.log(timeStartNew);
  console.log(`${formatDate} ${timeFinishNew}:00`);
  const ms = moment(`${formatDate} ${timeFinishNew}:00`).diff(
    moment(`${timeStartNew}`)
  );
  const minutes = moment
    .utc(
      moment(`${formatDate} ${timeFinishNew}:00`).diff(
        moment(`${timeStartNew}`)
      )
    )
    .format("mm");
  const d = moment.duration(ms);
  return {
    hoursDurations: Math.floor(d.asHours()),
    minutesDurations: Math.floor(minutes),
  };
};

export const formatMonth = () => {
  return [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
};

export const formatDays = () => {
  return ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
};
