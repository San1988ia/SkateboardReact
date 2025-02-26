import { useState } from "react";
import Button from "../Button/Button";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <>
      <p>Value: {value}</p>
      <Button
        title="+1"
        handleClick={() => {
          setValue(value + 1);
        }}
      />
    </>
  );
}
