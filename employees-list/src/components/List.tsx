import { FC } from "react";
import styled from "styled-components";
import { IState as IProps } from "../App";

const List: FC<IProps> = ({ employees }) => {
  const renderList = (): JSX.Element[] => {
    return employees.map((e) => {
      return (
        <StyledList key={e.name}>
          <StyledListHeader>
            <StyledListImg src={e.url} alt={e.name} className="list-img" />
            <h2>{e.name}</h2>
          </StyledListHeader>
          <p>{e.age} years old</p>
          <StyledListNote>{e.note}</StyledListNote>
        </StyledList>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

const StyledList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  width: 50rem;
  margin: 0rem auto;
  border: 0.1rem solid rgba(0, 0, 0, 0.233);
  padding: 1rem;
  justify-content: space-between;
`;

const StyledListHeader = styled.div`
  display: flex;
  align-items: center;
`;

const StyledListImg = styled.img`
      width: 4rem;
  height: 4rem;
  border-radius: 100%;
  margin-right: 0.5rem;
`

const StyledListNote = styled.p`
      width: 30%;
  text-align: left;
`

export default List;
