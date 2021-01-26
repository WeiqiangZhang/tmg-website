import actionTypes from "../actionTypes";

const initialState = {
  gifDone: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GIF_DONE:
      return {
        ...state,
        gifDone: true,
      };
    default:
      return state;
  }
};

export default reducer;
