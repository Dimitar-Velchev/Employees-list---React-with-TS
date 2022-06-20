import { FC } from "react";
import styled from "styled-components";
import {IState} from '../types';
import {MdDeleteForever} from "react-icons/md"

interface IProps extends IState  {
  onDelete: (data:string) => void;
}


const List: FC<IProps> = ({ employees,onDelete }) => {



  const renderList = (): JSX.Element[] => {
    return employees.map((emp) => {
      return (
        <StyledList key={emp.name}>
          <StyledListHeader>
            <StyledListImg src={emp.url} alt={emp.name} className="list-img" />
            <h2>{emp.name}</h2>
          </StyledListHeader>
          <p>{emp.age} years old</p>
          <StyledListNote>{emp.note}</StyledListNote>
          <button onClick={()=>onDelete(emp.name)}><MdDeleteForever size={25}/></button>
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
