import { FC, useState } from "react";
import styled from "styled-components";

import { IState as Props } from "../App";

interface IProps {
  employees: Props["employees"];
  setEmployees: React.Dispatch<React.SetStateAction<Props["employees"]>>;
}

const AddToList: FC<IProps> = ({ employees, setEmployees }) => {
  const [input, setInput] = useState({
    url: "",
    name: "",
    age: "",
    available: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age) {
      return;
    }

    setEmployees([
      ...employees,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        available: Boolean(input.available),
        note: input.note,
      },
    ]);

    setInput({
      url: "",
      name: "",
      age: "",
      available: "",
      note: "",
    });
  };

  return (
    <StyledAddToList>
      <StyledAddToListInput
        type="text"
        placeholder="Name"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <StyledAddToListInput
        type="number"
        placeholder="Age"
        name="age"
        value={input.age}
        onChange={handleChange}
      />
      <StyledAddToListInput
        type="text"
        placeholder="Image-Url"
        name="url"
        value={input.url}
        onChange={handleChange}
      />
      <StyledAddToListInput
        type="text"
        placeholder="Available"
        name="available"
        value={input.available}
        onChange={handleChange}
      />
      <StyledAddToListInput
        placeholder="Note"
        name="note"
        value={input.note}
        onChange={handleChange}
      />

      <StyledAddToListBtn onClick={handleClick}>Add To List</StyledAddToListBtn>
    </StyledAddToList>
  );
};

const StyledAddToList = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 5rem auto;
`;

const StyledAddToListInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin: 0.3rem 0rem;
`;

const StyledAddToListBtn = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  background-color: #0b5468;
  font-weight: 700;
  color: white;
  border: none;
`;

export default AddToList;
