import React from "react";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import Layout from "../components/layout/Layout";
import Schedules from "../components/schedules/Schedules";
import { SchedulesConsumer } from "../context/schedulesPrayerContext";

const ScheduleContainer = () => {
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
                (item) => item.date.gregorian.date >= formatDate
              );
          return (
            <Schedules
              dataSource={newData}
              region={context.state.region.label}
              loading={context.state.loading}
            />
          );
        }}
      </SchedulesConsumer>
    </Layout>
  );
};

export default ScheduleContainer;
