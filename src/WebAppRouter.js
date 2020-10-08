import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./components/history"

import HomeContent from "./pages/HomeContent";
import DestinationsCont from "./pages/DestinationsCont";
import StuffToDoCont from "./pages/StuffToDoCont";
import PlanYourTripCont from "./pages/PlanYourTripCont";
import EnquiryFormCont from "./pages/EnquiryFormCont";

class WebAppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={HomeContent} />
          <Route path="/Destinations" exact component={DestinationsCont} />
          <Route path="/StuffToDo" exact component={StuffToDoCont} />
          <Route path="/PlanYourTrip" exact component={PlanYourTripCont} />
          <Route path="/EnquiryForm" exact component={EnquiryFormCont} />
        </Switch>
      </Router>
    );
  }
}

export default WebAppRouter;