import actionTypes from "../actionTypes";
import update from 'immutability-helper';

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
    case actionTypes.UPDATE_SLIDE:
      let index = state.slide.findIndex(x => x._id === action.newSlide._id);
      return update(state, { 
        slide: { 
          [index]: {$merge: action.newSlide}
        }
      });
    case actionTypes.SET_CAROUSEL:
      return {
        ...state,
        slide: action.slides,
        loaded: true,
        loading: false,
      };
    case actionTypes.DELETE_SLIDE:
      let deletedIndex = state.slide.findIndex(x => x._id === action.deletedSlide._id);
      return update(state, { 
        slide: {$splice: [[deletedIndex, 1]]}
      });
    default:
      return state;
  }
};

export default reducer;
