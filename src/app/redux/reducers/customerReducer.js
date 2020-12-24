import { SIGN_UP, LOGOUT,SIGN_IN } from "./../constant/actionTypes";

const customer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      return {...state, userInfo: action.user, isAuthenticated: true};
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default customer;