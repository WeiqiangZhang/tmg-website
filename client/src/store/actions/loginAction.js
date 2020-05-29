import actionTypes from "../actionTypes";
import axios from "axios";

export const login = (username, password, history) => {
  return (dispatch) => {
    dispatch({type: actionTypes.SET_LOGIN_LOADING,});
    axios({
      method: "POST",
      url: "https://tmg-website-utsc.herokuapp.com/login",
      data: { username: username, password: password },
    })
      .then((res) => {
        dispatch({type: actionTypes.UNSET_LOGIN_LOADING,});
        dispatch({type: actionTypes.SET_AUTHENTICATED,});
        localStorage.setItem('jwt', res.data.token);
        history.push('/');
      })
      .catch((err) => {
        dispatch({type: actionTypes.UNSET_LOGIN_LOADING,});
        console.log(err);
      });
  };
};
