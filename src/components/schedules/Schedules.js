import React from "react";
import Skeleton from "react-loading-skeleton";
import TableManual from "../table/Table";
import { formatMonth } from "../../utils/FormatDate";
import { Calendar2, Location } from "iconsax-react";

import "./schedules.scss";

const Schedules = ({ dataSource, region, loading }) => {
  const date = new Date();
  return (
    <div className='wrapper-schedules'>
      <p className='title-schedule'>Jadwal Sholat</p>
      <p className='text-region-iftar'>
        <Calendar2
          size='18'
          color='#055a91'
          variant='Bulk'
          style={{ marginRight: 3 }}
        />{" "}
        {formatMonth()[date.getMonth()]} {date.getFullYear()}
      </p>
      <p className='text-region-iftar'>
        <Location
          size='18'
          color='#055a91'
          variant='Bulk'
          style={{ marginRight: 3 }}
        />{" "}
        {region}
      </p>
      {loading ? (
        <Skeleton width={"100%"} height={400} />
      ) : (
        <div className='table'>
          <TableManual data={dataSource} />
        </div>
      )}
    </div>
  );
};

export default Schedules;
