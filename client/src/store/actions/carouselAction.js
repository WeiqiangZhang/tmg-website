import actionTypes from "../actionTypes";
import axios from "axios";

export const uploadCarousel = (image, blurb, name, role) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://localhost:3001/carousel/new",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      data: { image: image.image, blurb: blurb, name: name, role: role },
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
