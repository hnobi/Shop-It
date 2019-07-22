import { FETCH_All_CATEGORIES } from '../constant/actionTypes';


const categoryReducer = (state = {}, action) => {

  switch (action.type) {
    case FETCH_All_CATEGORIES:
      return { ...state, ...action.categories }

    default:
      return state
  }
}

export default categoryReducer;