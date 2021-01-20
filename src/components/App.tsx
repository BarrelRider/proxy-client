import * as React from "react";
import { Home } from "../pages";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export const App: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page" component={Home}></Route>
        <Redirect from="*" to="/page"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};
