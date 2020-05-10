import React from "react";
import { Table } from "antd";
import moment from "moment";

import "./schedules.scss";
import { FaMapMarker } from "react-icons/fa";

const date = new Date();
const formatDate = moment(date).format("DD-MM-YYYY");
const borderText = (params) =>
  params === formatDate ? { color: "#000", fontWeight: "bold" } : null;

const columns = [
  {
    title: "Tanggal",
    dataIndex: "date",
    key: `date.timestamp`,
    render: (text, record) => {
      return (
        <p style={borderText(record.date.gregorian.date)}>{text.readable}</p>
      );
    },
  },
  {
    title: "Subuh",
    dataIndex: "timings",
    key: `date.timestamp`,
    render: (text, record) => {
      return <p style={borderText(record.date.gregorian.date)}>{text.Fajr}</p>;
    },
  },
  {
    title: "Zuhur",
    dataIndex: "timings",
    key: `date.timestamp`,
    render: (text, record) => {
      return <p style={borderText(record.date.gregorian.date)}>{text.Dhuhr}</p>;
    },
  },
  {
    title: "Ashar",
    dataIndex: "timings",
    key: `date.timestamp`,
    render: (text, record) => {
      return <p style={borderText(record.date.gregorian.date)}>{text.Asr}</p>;
    },
  },
  {
    title: "Magrib",
    dataIndex: "timings",
    key: `date.timestamp`,
    render: (text, record) => {
      return (
        <p style={borderText(record.date.gregorian.date)}>{text.Maghrib}</p>
      );
    },
  },
  {
    title: "Isya'",
    dataIndex: "timings",
    key: `date.timestamp`,
    render: (text, record) => {
      return (
        <p
          style={borderText(record.date.gregorian.date)}
          key={record.date.timestamp}>
          {text.Isha}
        </p>
      );
    },
  },
];

const Schedules = ({ dataSource, region }) => {
  return (
    <div className='wrapper-schedules'>
      <p className='title-schedule'>Jadwal Sholat</p>
      <p className='text-region-iftar'>
        <FaMapMarker /> {region}
      </p>
      <p className='desc'>
        Jangan sampai dehidrasi membuat anda lupa waktu sholat ya
      </p>
      <div className='table'>
        <Table
          columns={columns}
          bordered
          dataSource={dataSource}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default Schedules;
