import React from "react";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import "./table.scss";

const date = new Date();
const formatDate = moment(date).format("DD-MM-YYYY");
const borderText = (params) =>
  params === formatDate ? { fontWeight: "bold", background: "#C8DFE1" } : null;

const TableManual = ({ data }) => {
  return (
    <table className='table-manual'>
      <thead>
        <tr className='title-table'>
          <th style={{ fontSize: "15px" }}>Tanggal</th>
          <th style={{ fontSize: "15px" }}>Imsak</th>
          <th style={{ fontSize: "15px" }}>Subuh</th>
          <th style={{ fontSize: "15px" }}>Dzuhur</th>
          <th style={{ fontSize: "15px" }}>Ashar</th>
          <th style={{ fontSize: "15px" }}>Maghrib</th>
          <th style={{ fontSize: "15px" }}>Isya'</th>
        </tr>
      </thead>
      <tbody>
        {isEmpty(data)
          ? null
          : data.map((item, i) => {
              const { hijri } = item.date;
              return (
                <tr key={i} style={borderText(item.date.gregorian.date)}>
                  <td>
                    <p style={{ margin: 0 }}>{item.date.readable}</p>
                    <p
                      style={{
                        margin: 0,
                      }}>{`${hijri.day} ${hijri.month.en} ${hijri.year}`}</p>
                  </td>
                  <td>{item.timings.Imsak}</td>
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
