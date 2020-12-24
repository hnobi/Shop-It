import axios from "axios";
import { SIGN_UP, LOGOUT, SIGN_IN } from "../constant/actionTypes";
import toastr from "toastr";

const baseUrl = process.env.baseUrl;

export const signupApi = body => dispatch => {
  axios
    .post(`${baseUrl}/customers`, body)
    .then(user => {
      const customer = user.data;

      dispatch({
        type: SIGN_UP,
        user:customer.customer,
        token: customer.accessToken,
      });
      localStorage.setItem("isLoggedIn", true);
      toastr.success("Successfully created Shop It Account", "Success");

    })
    .catch(e => {
      toastr.error(e.response.data.error.message);
    });
};

export const signinApi = (body) => (dispatch) => {
  return axios
    .post(`${baseUrl}/customers/login`, body)
    .then((user) => {
      const customer = user.data;

      dispatch({
        type: SIGN_IN,
        user: customer.customer,
        token: customer.accessToken,
      });
      localStorage.setItem("isLoggedIn", true);
      toastr.success("Welcome To Shop It", "Success");
    })
    .catch((e) => {
      toastr.error(e.response.data.error.message);
    });
};







export const logout = () => (dispatch) => {
         localStorage.removeItem("isLoggedIn");
         dispatch({
           type: LOGOUT,
         });
  };
