import axios from 'axios';
import { FETCH_All_CATEGORIES } from '../constant/actionTypes'
const baseUrl = process.env.baseUrl;

export const getAllcategories = () => dispatch => {

  axios.get(`${baseUrl}/categories`).then(categories => {
    dispatch({
      type: FETCH_All_CATEGORIES,
      categories: categories.data,
    });
  })
}

