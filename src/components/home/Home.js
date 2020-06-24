import React from "react";
import Skeleton from "react-loading-skeleton";
import { FaMapMarker } from "react-icons/fa";

import "./home.scss";
import {
  getHourAndMinutes,
  unixTime,
  formatDateCompare,
} from "../../utils/FormatDate";
import Time from "../time/Time";

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
              className={
                compareDateOr(isya, subuh)
                  ? "wrapper-time-active"
                  : "wrapper-time"
              }>
              <p className='text-time'>Subuh</p>
              <p className='text-date'>{subuh}</p>
            </div>
            <div
              className={
                compareDate(subuh, zuhur)
                  ? "wrapper-time-active"
                  : "wrapper-time"
              }>
              <p className='text-time'>Zuhur</p>
              <p className='text-date'>{zuhur}</p>
            </div>
            <div
              className={
                compareDate(zuhur, ashar)
                  ? "wrapper-time-active"
                  : "wrapper-time"
              }>
              <p className='text-time'>Ashar</p>
              <p className='text-date'>{ashar}</p>
            </div>
            <div
              className={
                compareDate(ashar, magrib)
                  ? "wrapper-time-active"
                  : "wrapper-time"
              }>
              <p className='text-time'>Maghrib</p>
              <p className='text-date'>{magrib}</p>
            </div>
            <div
              className={
                compareDate(magrib, isya)
                  ? "wrapper-time-active"
                  : "wrapper-time"
              }>
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
