import actionTypes from "../actionTypes";
import axios from "axios";

export const login = (username, password) => {
  return (dispatch) => {
    axios
      .post("https://127.0.0.1:3001/api/login", { username, password })
      .then((res) => {
        console.log(res);
      });
  };
};
