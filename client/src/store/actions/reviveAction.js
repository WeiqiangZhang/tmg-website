
import actionTypes from '../actionTypes';

export const setGifDone = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_GIF_DONE,
    })
  }
}