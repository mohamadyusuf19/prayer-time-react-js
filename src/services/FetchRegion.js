import Axios from "axios";

export const fetchRegion = (unicode, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_ONGKIR}/MeP7c5ne${unicode}/m/wilayah/kabupaten?idpropinsi=${id}`
      );
      resolve(res.data.data);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const fetchProvince = (unicode) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_ONGKIR}/MeP7c5ne${unicode}/m/wilayah/provinsi`
      );
      resolve(res.data.data);
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
