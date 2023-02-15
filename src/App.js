import React, { useEffect, useReducer } from "react";
import Routes from "./routes/Routes";
import {
  getSchedulesPrayer,
  getSchedulesPrayerByPosition,
} from "./services/FetchSchedules";
import { SchedulesProvider } from "./context/schedulesPrayerContext";
import isEmpty from "lodash/isEmpty";
import { fetchRegion, fetchProvince } from "./services/FetchRegion";
import { OnFocusProvider } from "./context/onFocusMapContext";
import { Provider } from "jotai";

const initialState = {
  data: [],
  region: isEmpty(localStorage.getItem("region"))
    ? {
        value: "Kabupaten Nganjuk",
        label: "Kabupaten Nganjuk",
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
    const province = isEmpty(localStorage.getItem("province"))
      ? localStorage.setItem("province", JSON.stringify(state.province)) ||
        state.province
      : JSON.parse(localStorage.getItem("province"));
    fetchProvince()
      .then((res) => {
        const newData = res.map((item, i) => {
          return {
            value: item.id,
            label: item.nama,
          };
        });
        dispatch({ type: "GET_DATA_PROVINCE", payload: newData });
      })
      .catch(() => dispatch({ type: "SET_LOADING", payload: false }));
    fetchRegion(province.value)
      .then((res) => {
        const newData = res.map((item, i) => {
          return {
            value: item.nama,
            label: item.nama,
          };
        });
        dispatch({ type: "GET_DATA_REGION", payload: newData });
      })
      .catch(() => dispatch({ type: "SET_LOADING", payload: false }));
  }, []);
  useEffect(() => {
    const region = isEmpty(localStorage.getItem("region"))
      ? localStorage.setItem("region", JSON.stringify(state.region)) ||
        state.region
      : JSON.parse(localStorage.getItem("region"));
    const { latitude, longitude } = isEmpty(localStorage.getItem("map"))
      ? state.map
      : JSON.parse(localStorage.getItem("map"));
    dispatch({ type: "SET_LOADING", payload: true });
    if (region.value === "Lokasi Saya") {
      getSchedulesPrayerByPosition(latitude, longitude)
        .then((res) => {
          dispatch({ type: "GET_DATA", payload: res });
          dispatch({ type: "SET_LOADING", payload: false });
        })
        .catch(() => dispatch({ type: "SET_LOADING", payload: false }));
    } else {
      getSchedulesPrayer(region.value)
        .then((res) => {
          dispatch({ type: "GET_DATA", payload: res });
          dispatch({ type: "SET_LOADING", payload: false });
        })
        .catch(() => dispatch({ type: "SET_LOADING", payload: false }));
    }
  }, []);
  return (
    <Provider>
      <SchedulesProvider value={{ state, dispatch }}>
        <OnFocusProvider>
          <Routes />
        </OnFocusProvider>
      </SchedulesProvider>
    </Provider>
  );
}

export default App;
