import { FC } from "react";
import {IState as IProps} from "../App"



const List: FC<IProps> = ({ employees }) => {
  const renderList = (): JSX.Element[] => {
    return employees.map((e) => {
      return (
        <li key={e.name} className="list" >
          <div className="list-header">
            <img src={e.url} alt={e.name} className="list-img" />
            <h2>{e.name}</h2>
          </div>
          <p>{e.age} years old</p>
          <p className="list-note">{e.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
