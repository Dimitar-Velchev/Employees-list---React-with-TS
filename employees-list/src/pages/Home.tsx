import React, { FC, useState } from "react";
import styled from "styled-components";

import AddToList from "../components/AddToList";
import List from "../components/List";
import { IState } from "../types";

const Home = () => {
  const [employees, setEmployees] = useState<IState["employees"]>([
    {
      url: "https://pngimg.com/uploads/face/face_PNG5645.png",
      name: "Dimitar Velchev",
      age: 32,
      available: true,
      note: "junior",
    },
  ]);

  const handleDelete = (name: string): void => {
    const newEmployees = [...employees];

    const filtered = newEmployees.filter((e) => e.name !== name);

    setEmployees(filtered);
  };

  return (
    <StyledWrapper>
      <h1>Employee List</h1>
      <List employees={employees} onDelete={handleDelete} />
      <AddToList employees={employees} setEmployees={setEmployees} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  text-align: center;
  margin: 4rem;
`

export default Home;
