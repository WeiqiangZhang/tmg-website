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
        let image = btoa(
          new Uint8Array(res.data.image.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        // TODO: Find a way to not hard code data type
        const base64Image = `data:image/png;base64,${image}`;
        const newSlide = {...res.data, image: base64Image}; 
        dispatch({type: actionTypes.ADD_NEW_SLIDE, newSlide: newSlide});
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
