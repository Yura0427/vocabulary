import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    add(state, action) {
      state.data.push(action.payload);
    },
  },
});

export default statisticsSlice.reducer;
