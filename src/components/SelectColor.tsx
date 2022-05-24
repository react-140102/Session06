import { useState } from "react";

export function SelectColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </>
  );
}
