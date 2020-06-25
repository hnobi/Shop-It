import { SIGN_UP, LOGOUT } from "./../constant/actionTypes";

const customer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {...state, userInfo: action.user, isAuthenticated: true};
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default customer;