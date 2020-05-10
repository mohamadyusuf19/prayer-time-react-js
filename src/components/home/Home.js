import React from "react";
import Skeleton from "react-loading-skeleton";
import { FaMapMarker } from "react-icons/fa";

import "./home.scss";

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
}) => {
  return (
    <div className='wrapper-home'>
      <div className='card'>
        <p className='text-title-iftar'>Waktu Berbuka</p>
        <p className='text-region-iftar'>
          <FaMapMarker /> {region}
        </p>
        {loading ? (
          <Skeleton count={1} />
        ) : (
          <div className='wrapper-date-iftar'>
            <p className='text-date-iftar'>{date}</p>
            <p className='text-date-iftar'>{dateRamadhan}</p>
          </div>
        )}
        {loading ? (
          <Skeleton height={40} width={"50%"} />
        ) : (
          <p className='text-time-iftar'>{magrib}</p>
        )}
      </div>
      <p className='title-schedule'>Jadwal Sholat</p>
      <p className='desc'>
        Jangan sampai dehidrasi membuat anda lupa waktu sholat ya
      </p>
      {loading ? (
        <div className='wrapper-time-skeleton'>
          <Skeleton count={5} height={40} />
        </div>
      ) : (
        <>
          <div className='wrapper-time'>
            <p className='text-time'>Subuh</p>
            <p className='text-date'>{subuh}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Zuhur</p>
            <p className='text-date'>{zuhur}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Ashar</p>
            <p className='text-date'>{ashar}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Magrib</p>
            <p className='text-date'>{magrib}</p>
          </div>
          <div className='wrapper-time'>
            <p className='text-time'>Isya'</p>
            <p className='text-date'>{isya}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
