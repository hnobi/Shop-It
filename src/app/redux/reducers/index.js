import { combineReducers } from 'redux';
import { productReducer, productDetailsReducer } from './productReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';
import customerReducer from './customerReducer';

export default combineReducers({
	products: productReducer,
	categories: categoryReducer,
	productDetails: productDetailsReducer,
	shoppingCart: cartReducer,
	customer: customerReducer,
});
