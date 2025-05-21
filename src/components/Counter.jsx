import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

export default function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <button
      onClick={() => incrementHandler(5)}
      onContextMenu={() => decrementHandler(3)}
    >
      count is {count}
    </button>
  );
}
