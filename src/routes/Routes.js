import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "../container/HomeContainer";
import MapContainer from "../container/MapContainer";
import ScheduleContainer from "../container/ScheduleContainer";
import AccountContainer from "../container/AccountContainer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/maps' component={MapContainer} />
        <Route path='/schedules' component={ScheduleContainer} />
        <Route path='/account' component={AccountContainer} />
      </Switch>
    </Router>
  );
};

export default Routes;
