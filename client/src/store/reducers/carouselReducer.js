import actionTypes from "../actionTypes";

const initialState = {
  slide: [],
  loading: null,
  loaded: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CAROUSEL_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_NEW_SLIDE:
      return {
        ...state,
        slide: [...state.slide, action.newSlide],
        loading: false,
      };
    case actionTypes.SET_CAROUSEL:
      return {
        ...state,
        slide: action.slides,
        loaded: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
