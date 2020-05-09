import actionTypes from '../actionTypes';

export const setInfo = (info) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_INFO,
      ...info
    })
  }
}