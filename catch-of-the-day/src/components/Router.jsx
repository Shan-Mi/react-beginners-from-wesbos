import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import NotFound from "./NotFound";
import App from "./App";

/* make a rounter component */
/* Try first route, if doesn't match try the second route.. otherwise fall back to not-found route*/
/* route takes 3 parameters */
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker}></Route>
      <Route path="/store/:storeId" component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
