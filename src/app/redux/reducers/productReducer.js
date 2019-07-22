
import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from './../constant/actionTypes';

const productReducer = (state = {}, action) => {

  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, ...action.products };

    case FETCH_PRODUCTS_BY_CATEGORY:
      return {...state, ...action.products}
    default:
      return state;
  }
}


export default productReducer;