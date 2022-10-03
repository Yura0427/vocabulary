import { axiosRoot } from '../../axios';
import { wordSlice } from '../slices/wordSlice';



export const fetchWords = () => {
  return async (dispatch) => {
    try {
      dispatch(wordSlice.actions.fetching());
      const res = await axiosRoot.get('words');
      dispatch(wordSlice.actions.fetchSuccess(res.data));
    } catch (err) {
      dispatch(wordSlice.actions.fetchError(err.message));
    }
  };
};

export const createWords = (word) => {
  return async (dispatch) => {
    try {
      const res = await axiosRoot.post('words', word);
      dispatch(wordSlice.actions.add(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };
};
