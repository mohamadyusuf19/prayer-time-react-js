import Axios from "axios";

export const fetchRegion = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/provinsi/${id}/kabupaten`
      );
      resolve(res.data.kabupatens);
    } catch (error) {
      reject(error.response);
    }
  });
};

export const fetchProvince = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/provinsi`
      );
      resolve(res.data.semuaprovinsi);
    } catch (error) {
      reject(error.response);
    }
  });
};
