export const updateCounterSize = (size) => ({
  type: "UPDATE_COUNTER_SIZE",
  payload: size,
});

export const increaseSum = () => ({
  type: "INCREASE_SUM",
});

export const decreaseSum = () => ({
  type: "DECREASE_SUM",
});

export const resetSum = () => ({
  type: "RESET_SUM",
});
