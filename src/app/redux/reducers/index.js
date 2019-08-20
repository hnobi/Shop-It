import { combineReducers } from 'redux';
import { productReducer, productDetailsReducer } from './productReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  products: productReducer,
  categories: categoryReducer,
  productDetails: productDetailsReducer,
});
