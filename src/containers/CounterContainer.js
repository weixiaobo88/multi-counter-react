import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increaseSum, decreaseSum } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  increaseSum: () => {
    dispatch(increaseSum());
  },
  decreaseSum: (number) => {
    dispatch(decreaseSum(number));
  },
});

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;
