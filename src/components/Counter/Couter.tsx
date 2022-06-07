import { Badge, Button, Divider } from "antd";

import { increment, decrement, reset, counterSelector } from "./couter.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(counterSelector);
  // useEffect(() => {
  //   dispatch(reset());
  // }, [dispatch]);

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
