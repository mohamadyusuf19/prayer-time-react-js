import React from "react";
import Skeleton from "react-loading-skeleton";

import "./home.scss";
import {
  getHourAndMinutes,
  unixTime,
  formatDateCompare,
} from "../../utils/FormatDate";
import Time from "../time/Time";
import { useHistory } from "react-router";
import { isRealTimeAtom, prayerAtom } from "../../store/prayer.store";
import { useAtom } from "jotai";

const Home = ({
  subuh,
  zuhur,
  ashar,
  magrib,
  isya,
  date,
  dateHijri,
  region,
  loading,
  dateNow,
}) => {
  const newDate = new Date();
  const history = useHistory();

  const [prayer, setPrayer] = useAtom(prayerAtom);
  const [, setIsRealTime] = useAtom(isRealTimeAtom);

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

  const isActiveTime = (params) =>
    prayer === params ? "text-time-active" : "text-time";
  const isActiveDate = (params) =>
    prayer === params ? "text-date-active" : "text-date";

  return (
    <div className='wrapper-home'>
      <div className='inline-wrapper-home'>
        {/* <div
          className='card'
          onClick={() => history.push("/maps")}
          style={{ cursor: "pointer" }}>
          <p className='text-region-iftar'>
            <FaMapMarker /> {region}
          </p>
          {loading ? (
            <Skeleton count={2} />
          ) : (
            <div>
              <p className='text-date-iftar-hijri'>{dateHijri}</p>
              <p className='text-date-iftar'>{date}</p>
            </div>
          )}
        </div> */}
        <Time dateHijri={dateHijri} dateMasehi={date} />
        <div
          style={{
            zIndex: 10,
            background: "#fff",
            position: "relative",
            paddingTop: 20,
          }}>
          <p className='title-schedule'>Jadwal Sholat</p>
          {loading ? (
            <div className='wrapper-time-skeleton'>
              <Skeleton count={5} height={40} />
            </div>
          ) : (
            <>
              <div
                onClick={() => {
                  setPrayer("Subuh");
                  setIsRealTime(false);
                }}
                className={
                  compareDateOr(isya, subuh)
                    ? "wrapper-time-active"
                    : "wrapper-time"
                }>
                <p className={isActiveTime("Subuh")}>
                  Subuh<span className='next'> (selanjutnya)</span>
                </p>
                <p className={isActiveDate("Subuh")}>{subuh}</p>
              </div>
              <div
                onClick={() => {
                  setPrayer("Dzuhur");
                  setIsRealTime(false);
                }}
                className={
                  compareDate(subuh, zuhur)
                    ? "wrapper-time-active"
                    : "wrapper-time"
                }>
                <p className={isActiveTime("Dzuhur")}>
                  Dzuhur<span className='next'> (selanjutnya)</span>
                </p>
                <p className={isActiveDate("Dzuhur")}>{zuhur}</p>
              </div>
              <div
                onClick={() => {
                  setPrayer("Ashar");
                  setIsRealTime(false);
                }}
                className={
                  compareDate(zuhur, ashar)
                    ? "wrapper-time-active"
                    : "wrapper-time"
                }>
                <p className={isActiveTime("Ashar")}>
                  Ashar<span className='next'> (selanjutnya)</span>
                </p>
                <p className={isActiveDate("Ashar")}>{ashar}</p>
              </div>
              <div
                onClick={() => {
                  setPrayer("Maghrib");
                  setIsRealTime(false);
                }}
                className={
                  compareDate(ashar, magrib)
                    ? "wrapper-time-active"
                    : "wrapper-time"
                }>
                <p className={isActiveTime("Maghrib")}>
                  Maghrib<span className='next'> (selanjutnya)</span>
                </p>
                <p className={isActiveDate("Maghrib")}>{magrib}</p>
              </div>
              <div
                onClick={() => {
                  setPrayer("Isya");
                  setIsRealTime(false);
                }}
                className={
                  compareDate(magrib, isya)
                    ? "wrapper-time-active"
                    : "wrapper-time"
                }>
                <p className={isActiveTime("Isya")}>
                  Isya'<span className='next'> (selanjutnya)</span>
                </p>
                <p className={isActiveDate("Isya")}>{isya}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
