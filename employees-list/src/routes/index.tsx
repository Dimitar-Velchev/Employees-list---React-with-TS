import { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "../pages/Pages";
import Routes from "./Routes";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Pages />
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
