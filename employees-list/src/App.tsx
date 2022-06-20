import React, { useState } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Router from "../src/routes"
import styled from "styled-components";



function App() {

  return (
    
    <StyledApp>
      <Navigation />
      <Router />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
`;

export default App;
