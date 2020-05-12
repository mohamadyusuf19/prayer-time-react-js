import React from "react";

import Input from "../input/Input";
import DetailMaps from "../detailmaps/DetailMaps";
import Button from "../button/Button";

import "./map.scss";
import Skeleton from "react-loading-skeleton";

const Map = (props) => {
  const { loading, onChangeProvince, valueProvince, dataProvince } = props;
  return (
    <>
      <div className='wrapper-maps'>
        <p className='title-schedule'>Cari Daerahmu</p>
        <p className='desc'>
          Alhamdulillah semua daerah kabupaten/kota se-Indonesia bisa dicari
        </p>
        <div className='wrapper-input'>
          <Input
            onChange={onChangeProvince}
            value={valueProvince}
            data={dataProvince}
            placeholder='Pilih Provinsi'
          />
        </div>
        <div className='wrapper-input'>
          <Input {...props} />
        </div>
        <Button />
      </div>
      {loading ? (
        <div className='wrapper-skeleton'>
          <Skeleton height={400} width={"100%"} />
        </div>
      ) : (
        <DetailMaps {...props} placeholder='Pilih Kota' />
      )}
    </>
  );
};

export default Map;
