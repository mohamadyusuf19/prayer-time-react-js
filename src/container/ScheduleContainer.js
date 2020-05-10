import React from "react";
import Layout from "../components/layout/Layout";
import Schedules from "../components/schedules/Schedules";
import { SchedulesConsumer } from "../context/schedulesPrayerContext";

const ScheduleContainer = () => {
  return (
    <Layout>
      <SchedulesConsumer>
        {(context) => {
          return (
            <Schedules
              dataSource={context.state.data}
              region={context.state.region.label}
            />
          );
        }}
      </SchedulesConsumer>
    </Layout>
  );
};

export default ScheduleContainer;
