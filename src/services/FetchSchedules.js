import Axios from "axios";

export const getSchedulesPrayer = (region) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `https://api.aladhan.com/v1/hijriCalendarByCity?city=${region}&country=Indonesia&method=5&month=09&year=1441`
      );
      resolve(res.data.data);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const getSchedulesPrayerByPosition = (latitude, longitude) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `https://api.aladhan.com/v1/hijriCalendar?latitude=${latitude}&longitude=${longitude}&method=5&month=09&year=1441`
      );
      resolve(res.data.data);
    } catch (error) {
      reject(error.response);
    }
  });
};
