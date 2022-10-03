import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  step: 0,
  trueAnswer: 0,
  falseAnswer: 0,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    start(state, action) {
      state.data = action.payload;
      state.step = 1;
    },
    next(state) {
      state.step += 1;
    },
    trueAnswer(state) {
      state.trueAnswer += 1;
    },
    falseAnswer(state) {
      state.falseAnswer += 1;
    },
    reset(state) {
      state.data = [];
      state.step = 0;
      state.trueAnswer = 0;
      state.falseAnswer = 0;
    },
  },
});

export default testSlice.reducer;
