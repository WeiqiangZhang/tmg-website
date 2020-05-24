import actionTypes from '../actionTypes';

const initialState = {
    slide: [],
    loading: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_SLIDE:
            return {
              ...state,
              slide: [...state.slide, action.newSlide],
              loading: true,
            }
        default:
            return state;
    }
}

export default reducer;