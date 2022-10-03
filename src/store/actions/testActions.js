import { testSlice } from '../slices/testSlice';

export const startTests = (items) => {
  return (dispatch) => {
    dispatch(testSlice.actions.start(items));
  };
};

export const next = () => {
  return (dispatch) => {
    dispatch(testSlice.actions.next());
  };
};
export const trueAnswer = () => {
  return (dispatch) => {
    dispatch(testSlice.actions.trueAnswer());
  };
};
export const falseAnswer = () => {
  return (dispatch) => {
    dispatch(testSlice.actions.falseAnswer());
  };
};
export const reset = () => {
  return (dispatch) => {
    dispatch(testSlice.actions.reset());
  };
};
