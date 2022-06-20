import { FC, useEffect } from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "./404";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="*" component={NotFound}></Route>
    </Switch>
  );
};

export default Routes;