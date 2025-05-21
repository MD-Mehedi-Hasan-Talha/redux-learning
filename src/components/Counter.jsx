import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

function Counter({ count, increment, decrement }) {
  return <button onClick={increment} onContextMenu={decrement}>count is {count}</button>;
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
