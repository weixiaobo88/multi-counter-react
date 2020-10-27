import { connect } from "react-redux";
import { updateCounterSize, resetSum } from "../actions";
import CounterSizeGenerator from "../components/CounterSizeGenerator";

const mapDispatchToProps = (dispatch) => ({
  updateCounterSize: (size) => {
    dispatch(updateCounterSize(size));
  },
  resetSum: () => {
    dispatch(resetSum());
  },
});

const CounterSizeGeneratorContainer = connect(
  null,
  mapDispatchToProps
)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;
