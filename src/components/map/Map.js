import React from "react";

import Input from "../input/Input";
import DetailMaps from "../detailmaps/DetailMaps";

import "./map.scss";
import Skeleton from "react-loading-skeleton";

const Map = (props) => {
  const { loading } = props;
  return (
    <>
      <div className='wrapper-maps'>
        <p className='title-schedule'>Cari Daerahmu</p>
        <p className='desc'>Pastikan daerahmu terdaftar di aplikasi</p>
        <div className='wrapper-input'>
          <Input {...props} />
        </div>
      </div>
      {loading ? (
        <div className='wrapper-skeleton'>
          <Skeleton height={400} width={"100%"} />
        </div>
      ) : (
        <DetailMaps {...props} />
      )}
    </>
  );
};

export default Map;
