import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { FaMapMarker } from "react-icons/fa";
import moment from "moment";

import "./home.scss";
import {
  getHourAndMinutes,
  unixTime,
  formatDateCompare,
  setDurationTime,
} from "../../utils/FormatDate";
import Time from "../time/Time";

const mosqueIcon = require("../../assets/mosque-light.png");

const Home = ({
  subuh,
  zuhur,
  ashar,
  magrib,
  isya,
  date,
  dateRamadhan,
  region,
  loading,
  dateNow,
}) => {
  const history = useHistory();
  // const [time, setTime] = useState({
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });
  // const durationTime = setDurationTime(magrib);
  // const hoursDurations = isEmpty(durationTime)
  //   ? null
  //   : durationTime.hoursDurations;
  // const minutesDurations = isEmpty(durationTime)
  //   ? null
  //   : durationTime.minutesDurations;
  // console.log("hourduration", hoursDurations);
  // // useEffect(() => {
  // //   let timer = setInterval(() => showRemaining(), 1000);
  // //   return () => {
  // //     clearInterval(timer);
  // //   };
  // // }, []);
  // const setTimer = () => {
  //   let dates = new Date();
  //   let end = moment(dates)
  //     .add(hoursDurations, "hour")
  //     .add(minutesDurations, "minute")
  //     .add(10, "seconds");
  // };
  // const showRemaining = () => {
  //   let date = new Date();
  //   let now = date;
  //   let distance = end - now;
  //   if (distance < 0) {
  //     return clearInterval();
  //   }
  //   let timeDay = 1000 * 60 * 60 * 24;
  //   let timeHours = 1000 * 60 * 60;
  //   let timeMinutes = 1000 * 60;
  //   let timeSeconds = 1000;
  //   let hours = Math.floor((distance % timeDay) / timeHours);
  //   let minutes = Math.floor((distance % timeHours) / timeMinutes);
  //   let seconds = Math.floor((distance % timeMinutes) / timeSeconds);
  //   setTime({
  //     hours,
  //     minutes,
  //     seconds,
  //   });
  // };
  // console.log(time);
  const newDate = new Date();
  const compareDate = (firstTime, lastTime) => {
    // eslint-disable-next-line no-unused-expressions
    return (
      Date.parse(`${formatDateCompare(newDate)}`) >
        Date.parse(`${unixTime(dateNow)} ${getHourAndMinutes(firstTime)}:00`) &&
      Date.parse(`${formatDateCompare(newDate)}`) <
        Date.parse(`${unixTime(dateNow)} ${getHourAndMinutes(lastTime)}:00`)
    );
  };
  const compareDateOr = (firstTime, lastTime) => {
    // eslint-disable-next-line no-unused-expressions
    return (
      Date.parse(`${formatDateCompare(newDate)}`) >
        Date.parse(`${unixTime(dateNow)} ${getHourAndMinutes(firstTime)}:00`) ||
      Date.parse(`${formatDateCompare(newDate)}`) <
        Date.parse(`${unixTime(dateNow)} ${getHourAndMinutes(lastTime)}:00`)
    );
  };
  const conditional = () => {
    if (compareDateOr(isya, subuh)) {
      return <Time prayerTime='Subuh' realTime={subuh} />;
    }
    if (compareDate(subuh, zuhur)) {
      return <Time prayerTime='Zuhur' realTime={zuhur} />;
    }
    if (compareDate(zuhur, ashar)) {
      return <Time prayerTime='Ashar' realTime={ashar} />;
    }
    if (compareDate(ashar, magrib)) {
      return <Time prayerTime='Magrib' realTime={magrib} />;
    }
    if (compareDate(magrib, isya)) {
      return <Time prayerTime='Isya' realTime={isya} />;
    }
  };
  const background = `linear-gradient(to right, #055a91, rgba(50, 160, 160, 0.938))`;
  return (
    <div className='wrapper-home'>
      <div className='inline-wrapper-home'>
        <div className='card'>
          <p className='text-region-iftar'>
            <FaMapMarker /> {region}
          </p>
          {loading ? (
            <Skeleton count={2} />
          ) : (
            <div>
              <p className='text-date-iftar-hijri'>{dateRamadhan}</p>
              <p className='text-date-iftar'>{date}</p>
            </div>
          )}
          {loading ? (
            <Skeleton height={40} width={"50%"} />
          ) : (
            <p className='text-time-iftar'>{magrib}</p>
          )}
        </div>
        {conditional()}
        <p className='title-schedule'>Jadwal Sholat</p>
        {loading ? (
          <div className='wrapper-time-skeleton'>
            <Skeleton count={5} height={40} />
          </div>
        ) : (
          <>
            <div
              className='wrapper-time'
              style={{
                background: compareDateOr(isya, subuh) ? background : null,
              }}>
              <p className='text-time'>Subuh</p>
              <p className='text-date'>{subuh}</p>
            </div>
            <div
              className='wrapper-time'
              style={{
                background: compareDate(subuh, zuhur) ? background : null,
              }}>
              <p className='text-time'>Zuhur</p>
              <p className='text-date'>{zuhur}</p>
            </div>
            <div
              className='wrapper-time'
              style={{
                background: compareDate(zuhur, ashar) ? background : null,
              }}>
              <p className='text-time'>Ashar</p>
              <p className='text-date'>{ashar}</p>
            </div>
            <div
              className='wrapper-time'
              style={{
                background: compareDate(ashar, magrib) ? background : null,
              }}>
              <p className='text-time'>Maghrib</p>
              <p className='text-date'>{magrib}</p>
            </div>
            <div
              className='wrapper-time'
              style={{
                background: compareDate(magrib, isya) ? background : null,
              }}>
              <p className='text-time'>Isya'</p>
              <p className='text-date'>{isya}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
