import { FC, useEffect } from "react";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useLocation,
} from "react-router-dom";
import Employees from "../pages/Employees";
import RecipesCatalog from "../pages/RecipesCatalog";
import NotFound from "./404";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={RecipesCatalog}></Route>
      <Route path="/employees" component={Employees}></Route>
      <Route path="*" component={NotFound}></Route>
    </Switch>
  );
};

export default Routes;
