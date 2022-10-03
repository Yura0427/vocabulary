import { combineReducers, configureStore } from '@reduxjs/toolkit';
import wordsReducer from './slices/wordSlice';
import testReducer from './slices/testSlice';
import statisticsReducer from './slices/statisticsSlice';

const rootReducer = combineReducers({
  words: wordsReducer,
  test: testReducer,
  statistics: statisticsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
