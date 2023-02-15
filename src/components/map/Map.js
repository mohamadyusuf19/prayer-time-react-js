import React from "react";
import Skeleton from "react-loading-skeleton";

import Input from "../input/Input";
import DetailMaps from "../detailmaps/DetailMaps";
import Button from "../button/Button";

import "./map.scss";

const Map = (props) => {
  const { loading, onChangeProvince, valueProvince, dataProvince } = props;

  return (
    <div className='wrapper-maps'>
      <p className='title-schedule'>Cari Jadwal Shalat</p>
      <p className='desc'>
        Tentukan waktu shalat berdasarkan lokasi yang akan dicari atau
        berdasarkan lokasi saya.
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
      <Button {...props} />
      {loading ? (
        <div className='wrapper-skeleton'>
          <Skeleton height={400} width={"100%"} />
        </div>
      ) : (
        <DetailMaps {...props} placeholder='Pilih Kota' />
      )}
    </div>
  );
};

export default Map;
