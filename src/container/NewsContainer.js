import React from "react";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import News from "../components/news/News";
import Layout from "../components/layout/Layout";
import { SchedulesConsumer } from "../context/schedulesPrayerContext";

const NewsContainer = () => {
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
          return <News dateNow={newData} />;
        }}
      </SchedulesConsumer>
    </Layout>
  );
};

export default NewsContainer;
