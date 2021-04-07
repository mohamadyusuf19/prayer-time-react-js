import React from "react";

import Input from "../input/Input";
import DetailMaps from "../detailmaps/DetailMaps";
import Button from "../button/Button";
// import { OnFocusProvider } from "../../context/onFocusMapContext";
import "./map.scss";
import Skeleton from "react-loading-skeleton";

const Map = (props) => {
  const { loading, onChangeProvince, valueProvince, dataProvince } = props;

  return (
    <>
      <div className='wrapper-maps'>
        <p className='title-schedule'>Cari Jadwal Shalat</p>
        <p className='desc'>
          Tentukan waktu shalat berdasarkan lokasi yang dicari atau berdasarkan
          lokasi anda.
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
