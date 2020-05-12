import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "../container/HomeContainer";
import MapContainer from "../container/MapContainer";
import ScheduleContainer from "../container/ScheduleContainer";
import AccountContainer from "../container/AccountContainer";
import DoaBerbukaContainer from "../container/DoaBerbukaContainer";
import Footer from "../components/footer/Footer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/maps' component={MapContainer} />
        <Route path='/schedules' component={ScheduleContainer} />
        <Route path='/account' component={AccountContainer} />
        <Route path='/doa-buka-puasa' component={DoaBerbukaContainer} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
