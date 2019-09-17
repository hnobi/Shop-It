import { FETCH_CART, ADD_ITEM_TO_CART, FETCH_CART_PRODUCTLIST } from './../constant/actionTypes';

const cartReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_CART:
			return { ...state, cartId: action.cartId };

		case ADD_ITEM_TO_CART:
		case FETCH_CART_PRODUCTLIST:
			
			const qty = action.products.map(product => product.quantity).reduce((a, b) => a + b);
			const totalPrice = action.products.map(product =>( product.price * product.quantity)).reduce((a, b) => a + b);

			return { ...state, products: action.products, quantity: qty, totalPrice : totalPrice.toFixed(2) };

		default:
			return state;
	}
};

export default cartReducer;
