import actionTypes from "../actionTypes";

const initialState = {
  loading: null,
  authenticated: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UNSET_LOGIN_LOADING:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    default:
      return state;
  }
};

export default reducer;
