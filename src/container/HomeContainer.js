import React from "react";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import Layout from "../components/layout/Layout";
import { SchedulesConsumer } from "../context/schedulesPrayerContext";
import Home from "../components/home/Home";
import { formatDay } from "../utils/FormatDate";

const HomeContainer = () => {
  window.scrollTo(0, 0);

  const date = new Date();
  const formatDate = moment(date).format("DD-MM-YYYY");

  return (
    <Layout>
      <SchedulesConsumer>
        {(context) => {
          const newData = isEmpty(context)
            ? null
            : context.state.data.filter(
                (item) => item.date.gregorian.date === formatDate
              );
          if (context.state.loading)
            return (
              <Home
                loading={context.state.loading}
                region={context.state.region.label}
              />
            );
          if (isEmpty(newData)) return null;
          return (
            <Home
              dateNow={newData[0].date.timestamp}
              region={context.state.region.label}
              subuh={newData[0].timings.Fajr}
              zuhur={newData[0].timings.Dhuhr}
              ashar={newData[0].timings.Asr}
              magrib={newData[0].timings.Maghrib}
              isya={newData[0].timings.Isha}
              date={`${formatDay(newData[0].date.gregorian.weekday.en)}, ${
                newData[0].date.readable
              } M`}
              dateHijri={`${newData[0].date.hijri.day} ${newData[0].date.hijri.month.en} ${newData[0].date.hijri.year} H`}
            />
          );
        }}
      </SchedulesConsumer>
    </Layout>
  );
};

export default HomeContainer;
