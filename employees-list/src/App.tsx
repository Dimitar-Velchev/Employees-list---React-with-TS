import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";
import styled from "styled-components";

export interface IState {
  employees: {
    url: string;
    name: string;
    age: number;
    available: boolean;
    note?: string;
  }[];
}

function App() {
  const [employees, setEmployees] = useState<IState["employees"]>([
    {
      url: "https://pngimg.com/uploads/face/face_PNG5645.png",
      name: "Dimitar Velchev",
      age: 32,
      available: true,
      note: "junior",
    },
  ]);

  return (
    <StyledApp>
      <h1>Employee List</h1>
      <List employees={employees} />
      <AddToList employees={employees} setEmployees={setEmployees} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
`;

export default App;
