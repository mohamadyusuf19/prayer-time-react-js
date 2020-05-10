import React from "react";
import Layout from "../components/layout/Layout";
import Map from "../components/map/Map";
import { SchedulesConsumer } from "../context/schedulesPrayerContext";
import { getSchedulesPrayer } from "../services/FetchSchedules";

const MapContainer = () => {
  window.scrollTo(0, 0);
  return (
    <Layout>
      <SchedulesConsumer>
        {(context) => {
          const dispatch = context.dispatch;
          const { latitude, longitude } = context.state.map;
          const onChange = (e) => {
            dispatch({ type: "CHANGE_REGION", payload: e });
            dispatch({ type: "SET_LOADING", payload: true });
            localStorage.setItem("region", JSON.stringify(e));
            getSchedulesPrayer(e.value).then((res) => {
              const map = {
                latitude: res[0].meta.latitude,
                longitude: res[0].meta.longitude,
              };
              localStorage.setItem("map", JSON.stringify(map));
              dispatch({ type: "SET_LOADING", payload: false });
              dispatch({ type: "GET_DATA", payload: res });
              dispatch({ type: "CHANGE_MAP", payload: map });
            });
          };
          return (
            <Map
              onChange={onChange}
              value={context.state.region}
              latitude={latitude}
              longitude={longitude}
              loading={context.state.loading}
            />
          );
        }}
      </SchedulesConsumer>
    </Layout>
  );
};

export default MapContainer;
