import React from "react";
import isEmpty from "lodash/isEmpty";

import "./news.scss";
import { FaMoon, FaSun } from "react-icons/fa";
import { useHistory } from "react-router";

const News = ({ dateNow }) => {
  const history = useHistory();
  const dateNowHijri = isEmpty(dateNow) ? null : dateNow[0].date.hijri.day;
  const dayNow = isEmpty(dateNow) ? null : dateNow[0].date.gregorian.weekday.en;
  const monthNowHijri = isEmpty(dateNow)
    ? null
    : dateNow[0].date.hijri.month.number;
  const yearHijri = isEmpty(dateNow) ? null : dateNow[0].date.hijri.year;
  return (
    <div className='wrapper-news'>
      {monthNowHijri === 10 && dateNowHijri === "01" ? (
        <div className='card'>
          <p className='text-title'>
            Selamat Hari Raya Idul Fitri {yearHijri} H
          </p>
        </div>
      ) : null}
      {monthNowHijri === 12 && dateNowHijri === "10" ? (
        <div className='card'>
          <p className='text-title'>
            Selamat Hari Raya Idul Adha {yearHijri} H
          </p>
        </div>
      ) : null}
      <div className='card'>
        <p className='text-title'>Amalan harian</p>
        <p className='text-date-iftar-hijri'>Shalat Wajib</p>
        <p className='text-date-iftar-hijri'>Shalat Dhuha</p>
        <p className='text-date-iftar-hijri'>Shalat Sunnah Rawatib</p>
        <p className='text-date-iftar-hijri'>Shalat Tahajud</p>
        <p className='text-date-iftar-hijri'>Shalat Witir</p>
        <p className='text-date-iftar-hijri'>Membaca Alquran</p>
        <p className='text-date-iftar-hijri'>Dzikir pagi dan petang</p>
      </div>
      <div className='flex'>
        <div
          className='card-dzikir'
          onClick={() => history.push("/dzikir-pagi")}>
          <p className='title'>Dzikir Pagi</p>
          <FaSun />
        </div>
        <div
          className='card-dzikir'
          onClick={() => history.push("/dzikir-petang")}>
          <p className='title'>Dzikir Petang</p>
          <FaMoon />
        </div>
      </div>
      {(monthNowHijri === 12 && dateNowHijri === "10") ||
      (monthNowHijri === 12 && dateNowHijri === "11") ||
      (monthNowHijri === 12 && dateNowHijri === "12") ||
      (monthNowHijri === 12 && dateNowHijri === "13") ? (
        <div className='card'>
          <p className='text-title'>Peringatan</p>
          <p className='text-date-iftar-hijri'>
            Diharamkan berpuasa pada tanggal 1 Syawal, 10 Dhulhijjah, dan Hari
            Tasyrik (11, 12, 13 Dhulhijjah)
          </p>
        </div>
      ) : null}
      {monthNowHijri === 12 && dateNowHijri === "08" ? (
        <div className='card'>
          <p className='text-title'>Amalan Hari ini</p>
          <p className='text-date-iftar-hijri'>
            Puasa Tarwiyah tanggal 8 Dhulhijjah
          </p>
        </div>
      ) : null}
      {monthNowHijri === 12 && dateNowHijri === "09" ? (
        <div className='card'>
          <p className='text-title'>Amalan Hari ini</p>
          <p className='text-date-iftar-hijri'>
            Puasa Arafah tanggal 9 Dhulhijjah
          </p>
        </div>
      ) : null}
      {monthNowHijri === 10 && dateNowHijri === "01" ? (
        <div className='card'>
          <p className='text-title'>Peringatan</p>
          <p className='text-date-iftar-hijri'>
            Diharamkan berpuasa pada tanggal 1 Syawal, 10 Dhulhijjah, dan Hari
            Tasyrik (11, 12, 13 Dhulhijjah)
          </p>
        </div>
      ) : null}
      {dateNowHijri === "13" ||
      dateNowHijri === "14" ||
      dateNowHijri === "15" ? (
        <div className='card'>
          <p className='text-title'>Amalan hari ini</p>
          <p className='text-date-iftar-hijri'>
            Puasa Ayyamul Bidh setiap tanggal 13, 14, 15 di bulan-bulan Hijriah,
            kecuali tanggal 13 di bulan Dzulhijjah termasuk waktu yang
            diharamkan untuk berpuasa karena hari Tasyrik
          </p>
        </div>
      ) : null}
      {(monthNowHijri === 12 && dateNowHijri === "01") ||
      (monthNowHijri === 12 && dateNowHijri === "02") ||
      (monthNowHijri === 12 && dateNowHijri === "03") ||
      (monthNowHijri === 12 && dateNowHijri === "04") ||
      (monthNowHijri === 12 && dateNowHijri === "05") ||
      (monthNowHijri === 12 && dateNowHijri === "06") ||
      (monthNowHijri === 12 && dateNowHijri === "07") ||
      (monthNowHijri === 12 && dateNowHijri === "08") ||
      (monthNowHijri === 12 && dateNowHijri === "09") ||
      (monthNowHijri === 12 && dateNowHijri === "10") ? (
        <div className='card'>
          <p className='text-title'>Amalan hari ini</p>
          <p className='text-date-iftar-hijri'>
            Perbanyak amalan di 10 hari pertama di bulan Dzulhijjah
          </p>
        </div>
      ) : null}
      {dayNow === "Monday" || dayNow === "Thursday" ? (
        <div className='card'>
          <p className='text-title'>Amalan hari ini</p>
          <p className='text-date-iftar-hijri'>Puasa Senin, Kamis</p>
        </div>
      ) : null}
      {dayNow === "Thursday" ? (
        <div className='card'>
          <p className='text-title'>Amalan hari ini</p>
          <p className='text-date-iftar-hijri'>
            Membaca Surah Al-Kahfi Pada malam Jum'at
          </p>
        </div>
      ) : null}
      {dayNow === "Sunday" || dayNow === "Wednesday" ? (
        <div className='card'>
          <p className='text-title'>Amalan besok</p>
          <p className='text-date-iftar-hijri'>Puasa Senin, Kamis</p>
        </div>
      ) : null}
      {dayNow === "Thursday" ? (
        <div className='card'>
          <p className='text-title'>Amalan besok</p>
          <p className='text-date-iftar-hijri'>
            Membaca Surah Al-Kahfi pada hari Jum'at
          </p>
        </div>
      ) : null}
      {dateNowHijri === 12 ? (
        <div className='card'>
          <p className='text-title'>Amalan besok</p>
          <p className='text-date-iftar-hijri'>
            Puasa Ayyamul Bidh setiap tanggal 13, 14, 15 di bulan-bulan Hijriah,
            kecuali tanggal 13 di bulan Dzulhijjah termasuk waktu yang
            diharamkan untuk berpuasa karena hari Tasyrik
          </p>
        </div>
      ) : null}
      {monthNowHijri === 12 && dateNowHijri === "07" ? (
        <div className='card'>
          <p className='text-title'>Amalan besok</p>
          <p className='text-date-iftar-hijri'>
            Puasa Tarwiyah tanggal 8 Dhulhijjah
          </p>
        </div>
      ) : null}
      {monthNowHijri === 12 && dateNowHijri === "08" ? (
        <div className='card'>
          <p className='text-title'>Amalan besok</p>
          <p className='text-date-iftar-hijri'>
            Puasa Arafah tanggal 9 Dhulhijjah
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default News;
