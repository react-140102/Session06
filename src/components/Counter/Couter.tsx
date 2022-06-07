import { Badge, Button, Divider } from "antd";

import { increment, decrement } from "./couter.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.shomarande.value);
  return (
    <>
      <Divider></Divider>
      <Button type="primary" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Badge count={count} />
      <Button type="primary" onClick={() => dispatch(decrement())} danger>
        -
      </Button>
    </>
  );
};

export default Counter;
