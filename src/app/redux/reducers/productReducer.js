
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_SINGLE_PRODUCT
} from './../constant/actionTypes';



const productReducer = (state = {}, action) => {

  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, ...action.products };

    case FETCH_PRODUCTS_BY_CATEGORY:
      return { ...state, ...action.products }

    default:
      return state;
  }
}


const productDetailsReducer = (state = {}, action) => {

  switch (action.type) {
    case FETCH_SINGLE_PRODUCT:
      return { ...state, ...action.product }

    default:
      return state;
  }
}


export { productReducer, productDetailsReducer };
