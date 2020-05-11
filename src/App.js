import React, { useEffect, useReducer } from "react";
import Routes from "./routes/Routes";
import { getSchedulesPrayer } from "./services/FetchSchedules";
import { SchedulesProvider } from "./context/schedulesPrayerContext";
import isEmpty from "lodash/isEmpty";
import {
  fetchRegion,
  fetchProvince,
  fetchUnicode,
} from "./services/FetchRegion";

const initialState = {
  data: [],
  region: isEmpty(localStorage.getItem("region"))
    ? {
        value: "Nganjuk",
        label: "Nganjuk",
      }
    : JSON.parse(localStorage.getItem("region")),
  province: isEmpty(localStorage.getItem("province"))
    ? {
        value: 35,
        label: "Jawa Timur",
      }
    : JSON.parse(localStorage.getItem("province")),
  loading: false,
  map: isEmpty(localStorage.getItem("map"))
    ? {
        latitude: -7.6043721,
        longitude: 111.8993478,
      }
    : JSON.parse(localStorage.getItem("map")),
  dataRegion: [],
  dataProvince: [],
  unicode: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "CHANGE_REGION":
      return { ...state, region: action.payload };
    case "CHANGE_PROVINCE":
      return { ...state, province: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "CHANGE_MAP":
      return { ...state, map: action.payload };
    case "GET_DATA_REGION":
      return { ...state, dataRegion: action.payload };
    case "GET_DATA_PROVINCE":
      return { ...state, dataProvince: action.payload };
    case "GET_UNICODE":
      return { ...state, unicode: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchUnicode().then((unicode) => {
      dispatch({ type: "GET_UNICODE", payload: unicode });
      const province = isEmpty(localStorage.getItem("province"))
        ? localStorage.setItem("province", JSON.stringify(state.province)) ||
          state.province
        : JSON.parse(localStorage.getItem("province"));
      fetchProvince(unicode)
        .then((res) => {
          const newData = res.map((item, i) => {
            return {
              value: item.id,
              label: item.name,
            };
          });
          console.log("newData", newData);
          dispatch({ type: "GET_DATA_PROVINCE", payload: newData });
        })
        .catch((err) => console.log(err));
      fetchRegion(unicode, province.value)
        .then((res) => {
          const newData = res.map((item, i) => {
            return {
              value: item.name,
              label: item.name,
            };
          });
          dispatch({ type: "GET_DATA_REGION", payload: newData });
        })
        .catch((err) => console.log(err));
    });
  }, []);
  useEffect(() => {
    const region = isEmpty(localStorage.getItem("region"))
      ? localStorage.setItem("region", JSON.stringify(state.region)) ||
        state.region
      : JSON.parse(localStorage.getItem("region"));
    dispatch({ type: "SET_LOADING", payload: true });
    getSchedulesPrayer(region.value)
      .then((res) => {
        dispatch({ type: "GET_DATA", payload: res });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <SchedulesProvider value={{ state, dispatch }}>
      <Routes />
    </SchedulesProvider>
  );
}

export default App;
