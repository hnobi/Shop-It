import axios from 'axios';
import { FETCH_CART, ADD_ITEM_TO_CART,FETCH_CART_PRODUCTLIST} from './../constant/actionTypes';

const baseUrl = process.env.baseUrl;

export const getCartId = () => dispatch => {
	axios.get(`${baseUrl}/shoppingcart/generateUniqueId`).then(cart => {
		localStorage.setItem('cartId', cart.data.cart_id);

		return dispatch({
			type: FETCH_CART,
			cartId: cart.data.cart_id
		});
	});
};

export const addTocart = data => dispatch => {
	axios
		.post(`${baseUrl}/shoppingcart/Add`, data)
		.then(products => {
			dispatch({
				type: ADD_ITEM_TO_CART,
			products:products.data
		});
		})
		.catch(e => console.log(e));
};

export const getCartProductList = cartId => dispatch => {
	axios.get(`${baseUrl}/shoppingcart/${cartId}`).then(products => {
		dispatch({
			type: FETCH_CART_PRODUCTLIST,
			products:products.data

		})
	});
};
