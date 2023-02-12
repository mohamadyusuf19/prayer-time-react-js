import Axios from "axios";

export const fetchRegion = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_LOCATION}/api/daerahindonesia/kota?id_provinsi=${id}`
      );
      resolve(res.data.kota_kabupaten);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const fetchProvince = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_LOCATION}/api/daerahindonesia/provinsi`
      );
      resolve(res.data.provinsi);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const fetchUnicode = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(`${process.env.REACT_APP_API_ONGKIR}/poe`);
      resolve(res.data.token);
    } catch (error) {
      reject(error.response);
    }
  });
};
