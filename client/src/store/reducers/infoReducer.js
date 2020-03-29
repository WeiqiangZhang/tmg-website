import actionTypes from '../actionTypes';

const initialState = {
    info: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INFO:
            return {
              ...action
            }
        default:
            return state;
    }
}

export default reducer;