import { useRef, useContext } from "react";
import { AppContext } from "../App";

export function SelectColor() {
  const [context, setContext] = useContext(AppContext);

  // const [color, setColor] = useState("red");
  const selectRef = useRef<HTMLSelectElement>(null);
  const setSelectColor = (val: string) => {
    if (selectRef && selectRef.current) {
      setContext({ color: val, lang: context.lang });
      selectRef.current.style.color = val;
    }
  };
  return (
    <>
      {/* <select
        style={{ color }}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      > */}
      <select ref={selectRef} onChange={(e) => setSelectColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </>
  );
}
