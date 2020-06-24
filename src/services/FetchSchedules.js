import Axios from "axios";

export const getSchedulesPrayer = (region) => {
  return new Promise(async (resolve, reject) => {
    const date = new Date();
    try {
      const res = await Axios.get(
        `${
          process.env.REACT_APP_API_PRAYER_TIME
        }/v1/calendarByCity?city=${region}&country=Indonesia&method=5&month=${
          date.getMonth() + 1
        }&year=${date.getFullYear()}`
      );
      resolve(res.data.data);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const getSchedulesPrayerByPosition = (latitude, longitude) => {
  return new Promise(async (resolve, reject) => {
    const date = new Date();
    try {
      const res = await Axios.get(
        `${
          process.env.REACT_APP_API_PRAYER_TIME
        }/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=5&month=${
          date.getMonth() + 1
        }&year=${date.getFullYear()}`
      );
      resolve(res.data.data);
    } catch (error) {
      reject(error.response);
    }
  });
};
