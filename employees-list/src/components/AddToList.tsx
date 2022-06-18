import { FC, useState } from "react";
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
    <div className="addToList">
      <input
        className="addToList-input"
        type="text"
        placeholder="Name"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        className="addToList-input"
        type="number"
        placeholder="Age"
        name="age"
        value={input.age}
        onChange={handleChange}
      />
      <input
        className="addToList-input"
        type="text"
        placeholder="Image-Url"
        name="url"
        value={input.url}
        onChange={handleChange}
      />
      <input
        className="addToList-input"
        type="text"
        placeholder="Available"
        name="available"
        value={input.available}
        onChange={handleChange}
      />
      <textarea
        className="addToList-input"
        placeholder="Note"
        name="note"
        value={input.note}
        onChange={handleChange}
      />

      <button className="addToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};
export default AddToList;
