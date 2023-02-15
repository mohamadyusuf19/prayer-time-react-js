import { useAtom } from "jotai";
import { isNil } from "lodash";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { isRealTimeAtom, prayerAtom } from "../../store/prayer.store";

import "./time.scss";

const sunImage = require("../../assets/sun.svg");
const mosqueDay = require("../../assets/mosque_day.svg");
const mosqueNight = require("../../assets/mosque_night.svg");

const conditionalTime = (prayerTime) => {
  switch (prayerTime) {
    case "Subuh":
      return {
        isMosqueDay: false,
        skyBackground: "linear-gradient(180deg, #1d2671 0%, #651d47 100%)",
        sunPosition: -80,
      };
    case "Syuruq":
      return {
        isMosqueDay: true,
        skyBackground: "linear-gradient(180deg, #0e7ed3 0% ,#b1e5fd 100%)",
        sunPosition: 0,
      };
    case "Dhuha":
      return {
        isMosqueDay: true,
        skyBackground: "linear-gradient(180deg, #0e7ed3 0% ,#b1e5fd 100%)",
        sunPosition: 60,
      };
    case "AkhirDhuha":
      return {
        isMosqueDay: true,
        skyBackground: "linear-gradient(180deg, #0e7ed3 0% ,#b1e5fd 100%)",
        sunPosition: 100,
      };
    case "Dzuhur":
      return {
        isMosqueDay: true,
        skyBackground: "linear-gradient(180deg, #46bbef 0% ,#b1e5fd 100%)",
        sunPosition: 250,
      };
    case "Ashar":
      return {
        isMosqueDay: true,
        skyBackground: "linear-gradient(180deg, #66a6ff 0%, #89f7fe 100%)",
        sunPosition: 100,
      };
    case "Maghrib":
      return {
        isMosqueDay: false,
        skyBackground:
          "linear-gradient(180deg, #7160c0 0%, #c33764 25%, #df4184 50%, #eac747 100%)",
        sunPosition: -40,
      };
    case "Isya":
      return {
        isMosqueDay: false,
        skyBackground: "linear-gradient(180deg, #345892 0%, #151c3a 100%)",
        sunPosition: -80,
      };
    default:
      break;
  }
};

const conditionalHours = (hour) => {
  if (hour >= 3 && hour <= 5) {
    return "Subuh";
  } else if (hour >= 6 && hour <= 7) {
    return "Syuruq";
  } else if (hour >= 8 && hour <= 9) {
    return "Dhuha";
  } else if (hour >= 10 && hour <= 11) {
    return "AkhirDhuha";
  } else if (hour >= 12 && hour <= 14) {
    return "Dzuhur";
  } else if (hour >= 15 && hour <= 16) {
    return "Ashar";
  } else if (hour >= 17 && hour <= 18) {
    return "Maghrib";
  } else if (hour >= 19 || hour >= 2) {
    return "Isya";
  }
};

const Time = ({ dateHijri, dateMasehi }) => {
  const hour = moment().format("HH");

  const [prayer, setPrayer] = useAtom(prayerAtom);
  const [isRealTime, setIsRealTime] = useAtom(isRealTimeAtom);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (isNil(prayer)) {
      setPrayer(conditionalHours(hour));
    }
  }, []);

  useEffect(() => {
    setIsRealTime(true);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  });

  const tick = () => {
    setTime(new Date());
    if (isRealTime) {
      setPrayer(conditionalHours(hour));
    }
  };

  return (
    <div
      style={{
        height: 360,
        background: conditionalTime(prayer)?.skyBackground,
        position: "relative",
      }}>
      <div>
        <p style={{ position: "absolute", left: 30, top: 150, color: "#fff" }}>
          {dateHijri}
        </p>
        <p style={{ position: "absolute", left: 30, top: 170, color: "#fff" }}>
          {dateMasehi}
        </p>
        <p
          style={{
            position: "absolute",
            left: 30,
            top: 190,
            color: "#fff",
            fontSize: 30,
          }}>
          {time.toLocaleTimeString("en", {
            hour: "numeric",
            hour12: false,
            minute: "numeric",
          })}
        </p>
      </div>
      <img
        alt='icon'
        style={{
          height: 80,
          width: 80,
          position: "absolute",
          bottom: conditionalTime(prayer)?.sunPosition,
          right: 200,
          zIndex: 1,
          transition: "0.5s ease",
        }}
        src={sunImage}
      />
      <div style={{ position: "absolute", bottom: 0, right: 50 }}>
        {conditionalTime(prayer)?.isMosqueDay ? (
          <img alt='icon' style={{ height: 160, width: 160 }} src={mosqueDay} />
        ) : (
          <img
            alt='icon'
            style={{ height: 160, width: 160 }}
            src={mosqueNight}
          />
        )}
      </div>
    </div>
    // <div className='card-time'>
    //   <p className='text-title-iftar'>Segera</p>
    //   <p className='text-date-iftar-hijri'>Waktu {prayerTime}</p>
    //   <p className='text-time-iftar'>{realTime}</p>
    // </div>
  );
};

export default Time;
