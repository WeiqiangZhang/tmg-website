import actionTypes from "../actionTypes";
import update from 'immutability-helper';

const initialState = {
  members: {},
  loading: null,
  loaded: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MEMBERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_NEW_MEMBER:
      return update(state, { 
        members: { 
          [action.role]: {$merge: action.newMember}
        }
      });
    default:
      return state;
  }
};

export default reducer;
