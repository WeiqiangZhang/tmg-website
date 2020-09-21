import actionTypes from "../actionTypes";
import axios from "axios";

const bufferToBase64 = (data) => {
  let image = btoa(
    new Uint8Array(data.image.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  // TODO: Find a way to not hard code data type
  const base64Image = `data:image/png;base64,${image}`;
  return { ...data, image: base64Image };
};

export const uploadMember = (image, role) => {
  console.log(role)
  console.log(image)
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_MEMBERS_LOADING });
    axios({
      method: "POST",
      url: "https://localhost:3001/team/new",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      data: { image: image.image, role: role },
    })
      .then((res) => {
        dispatch({
          type: actionTypes.ADD_NEW_MEMBER,
          role: role,
          newMember: bufferToBase64(res.data),
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("jwt");
          dispatch({ type: actionTypes.API_UNAUTHORIZED });
        }
      });
  };
};
