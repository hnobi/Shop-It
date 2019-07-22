import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from './../constant/actionTypes';

const baseUrl = process.env.baseUrl;

// actions 
const getProductsAction = (products) => ({
  type: FETCH_PRODUCTS,
  products: products.data,
})

const getProductsByCategoryAction = (products) => ({
  type: FETCH_PRODUCTS_BY_CATEGORY,
  products: products.data,
})


// action creators
export const getAllProducts = (page) => dispatch => {
  axios.get(`${baseUrl}/products?page=${page}&limit=8`).then(products => {
    dispatch(getProductsAction(products));
  });
}

export const getProductByCategory = (page, categoryId) => dispatch => {
  axios.get(`${baseUrl}/products/inCategory/${categoryId}?page=${page}&limit=8`).then(products => {
    dispatch(getProductsByCategoryAction(products));
  });
}
