import React, { useEffect, useReducer } from "react";
import Routes from "./routes/Routes";
import { getSchedulesPrayer } from "./services/FetchSchedules";
import { SchedulesProvider } from "./context/schedulesPrayerContext";
import isEmpty from "lodash/isEmpty";

const initialState = {
  data: [],
  region: isEmpty(localStorage.getItem("region"))
    ? {
        value: "Nganjuk",
        label: "Nganjuk",
      }
    : JSON.parse(localStorage.getItem("region")),
  loading: false,
  map: isEmpty(localStorage.getItem("map"))
    ? {
        latitude: -7.6043721,
        longitude: 111.8993478,
      }
    : JSON.parse(localStorage.getItem("map")),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "CHANGE_REGION":
      return { ...state, region: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "CHANGE_MAP":
      return { ...state, map: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const region = isEmpty(localStorage.getItem("region"))
      ? localStorage.setItem("region", JSON.stringify(state.region))
      : localStorage.getItem("region");
    dispatch({ type: "SET_LOADING", payload: true });
    getSchedulesPrayer(region)
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
