import React from "react";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import "./table.scss";
import { Affix } from "antd";

const date = new Date();
const formatDate = moment(date).format("DD-MM-YYYY");
const borderText = (params) =>
  params === formatDate
    ? { color: "#fff", fontWeight: "bold", background: "grey" }
    : null;

const TableManual = ({ data }) => {
  return (
    <table className='table-manual'>
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Subuh</th>
          <th>Zuhur</th>
          <th>Ashar</th>
          <th>Magrib</th>
          <th>Isya'</th>
        </tr>
      </thead>
      <tbody>
        {isEmpty(data)
          ? null
          : data.map((item, i) => {
              return (
                <tr key={i} style={borderText(item.date.gregorian.date)}>
                  <td>{item.date.readable}</td>
                  <td>{item.timings.Fajr}</td>
                  <td>{item.timings.Dhuhr}</td>
                  <td>{item.timings.Asr}</td>
                  <td>{item.timings.Maghrib}</td>
                  <td>{item.timings.Isha}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};

export default TableManual;
