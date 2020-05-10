import React from "react";
import Layout from "../components/layout/Layout";
import Map from "../components/map/Map";
import { SchedulesConsumer } from "../context/schedulesPrayerContext";
import { getSchedulesPrayer } from "../services/FetchSchedules";
import { fetchRegion } from "../services/FetchRegion";

const MapContainer = () => {
  window.scrollTo(0, 0);
  return (
    <Layout>
      <SchedulesConsumer>
        {(context) => {
          const dispatch = context.dispatch;
          const { latitude, longitude } = context.state.map;
          const onChange = (e) => {
            if (e === null) return null;
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
          const onChangeProvince = (e) => {
            if (e === null) return null;
            dispatch({ type: "CHANGE_PROVINCE", payload: e });
            dispatch({ type: "SET_LOADING", payload: true });
            localStorage.setItem("province", JSON.stringify(e));
            fetchRegion(e.value).then((res) => {
              const newData = res.map((item, i) => {
                return {
                  value: item.nama,
                  label: item.nama,
                };
              });
              dispatch({ type: "GET_DATA_REGION", payload: newData });
              dispatch({ type: "CHANGE_REGION", payload: newData[0] });
              localStorage.setItem("region", JSON.stringify(newData[0]));
              getSchedulesPrayer(newData[0].value).then((res) => {
                const map = {
                  latitude: res[0].meta.latitude,
                  longitude: res[0].meta.longitude,
                };
                localStorage.setItem("map", JSON.stringify(map));
                dispatch({ type: "SET_LOADING", payload: false });
                dispatch({ type: "GET_DATA", payload: res });
                dispatch({ type: "CHANGE_MAP", payload: map });
              });
            });
          };
          return (
            <Map
              onChange={onChange}
              value={context.state.region}
              latitude={latitude}
              longitude={longitude}
              loading={context.state.loading}
              data={context.state.dataRegion}
              onChangeProvince={onChangeProvince}
              valueProvince={context.state.province}
              dataProvince={context.state.dataProvince}
            />
          );
        }}
      </SchedulesConsumer>
    </Layout>
  );
};

export default MapContainer;
