import { useState } from "react";

type DropDownProps = {
  label: string;
  items: string[];
};

export default function DropDown({ label, items }: Readonly<DropDownProps>) {
  const [value, setValue] = useState("-");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="DropDown">
      <label htmlFor="DropDown">{label}:</label>{" "}
      <select name="DropDown" id="DropDown" onChange={handleChange}>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>Chose here: {value}</p>
    </div>
  );
}
