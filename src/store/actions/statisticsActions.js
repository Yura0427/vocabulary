import { axiosRoot } from '../../axios';
import { statisticsSlice } from '../slices/statisticsSlice';

export const fetchStatistics = () => {
  return async (dispatch) => {
    try {
      dispatch(statisticsSlice.actions.fetching());
      const res = await axiosRoot.get('statistics');
      dispatch(statisticsSlice.actions.fetchSuccess(res.data));
    } catch (err) {
      dispatch(statisticsSlice.actions.fetchError(err.message));
    }
  };
};

export const createStatistics = (word) => {
  return async (dispatch) => {
    try {
      const res = await axiosRoot.post('statistics', word);
      dispatch(statisticsSlice.actions.add(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };
};
