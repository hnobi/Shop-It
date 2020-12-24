import React, { useState, useEffect } from "react";
import countryIcon from "../asset/images/gbr.png";
import notificationImg from "../asset/images/icons-bag.png";
import "./../asset/scss/top-navbar.scss";
import { connect } from "react-redux";
import { getCartProductList } from "./../redux/actions/cartAction";
import {logout} from './../redux/actions/customer';
import Cart from "./ShoppingCart";
import Modal from "./HOC/Modal";
import Signup from "./Signup";
import Login from "./Login";
import { Redirect } from "react-router-dom";

class TopNavbar extends React.Component {
  state = {
    active: false,
    modalIsOpen: false,
    login: false,
    signup: false,
    userLoggedIn: false
  };

  componentDidMount() {
    const id = localStorage.getItem("cartId");
    this.props.CartProductList(id);
  }

  toggleCart = () => this.setState({ active: !this.state.active });

  /**
   *
   *cancle button (X) for cart bag
   * @memberof TopNavbar
   */
  cancelBtn = () =>
    this.setState({
      active: false
    });

 
  addScrollLock = () => {
    document.querySelector("html").classList.add("scroll-lock");
  };

  
  removeScrollLock = () => {
    document.querySelector("html").classList.remove("scroll-lock");
  };


  /**
   *
   * cancle button (X) for signup and signin
   * @memberof TopNavbar
   */
  cancelAuthBtn = () => {
    this.setState({
      modalIsOpen: false,
      login: false,
      signup: false
    });
    this.removeScrollLock();
  };

  openModal = type => {
    let signup;
    let login;
    if (type === "signup") {
      signup = true;
      login = false;
    } else {
      signup = false;
      login = true;
    }

    this.setState({ modalIsOpen: true, login, signup, active: false});
    this.addScrollLock();
  };

handleLogout = () => {
this.props.logoutUser();
}

userLoggedIn = (a, b) => {
  if(a || b ) {
    return true;
 }
  return false;
}


  render() {
   const {isAuthenticated, isLoggedIn} = this.props;
    const references = ["Daily Deals", "Sell", "Help & Contact"];
    const { quantity, price } = this.props;
    const { signup, modalIsOpen, login } = this.state;
    return (
      <>
        <div className="top-nav">
          {this.userLoggedIn(isLoggedIn, isAuthenticated) ? (
            <span className="logout-btn" onClick={this.handleLogout}>
              Logout
            </span>
          ) : (
            <div className="top-nav__registration">
              Hi!
              <span onClick={() => this.openModal("login")}> Sign in </span>
              or <span onClick={() => this.openModal("signup")}>Register</span>
            </div>
          )}
          <div className="top-nav__quick-reference">
            <ul>
              {references.map((reference, index) => {
                return <li key={index}>{reference}</li>;
              })}
            </ul>
          </div>

          <div className="top-nav__user-info">
            <div className="top-nav__user-info--country">
              <img src={countryIcon} alt="country logo" />
              <span> &euro; GBP</span>
            </div>
            <div className="top-nav__user-info--cart">
              <div className="notification" onClick={this.toggleCart}>
                <img src={notificationImg} alt="country logo" />
                {quantity > 0 && <span className="badge">{quantity}</span>}
              </div>
              <span> Your bag : &euro; {price || 0}</span>
            </div>
          </div>
        </div>
        <Cart active={this.state.active}
         cancelBtn={this.cancelBtn}
          openModal={this.openModal}
          isLoggedIn={() => this.userLoggedIn(isLoggedIn, isAuthenticated)}
          />
        {modalIsOpen && (
          <Modal
            cancelBtn={this.cancelAuthBtn}
            header={signup ? "Sign Up" : login ? "Sign In" : ""}
          >
            {signup && (
              <Signup
                loadloginPage={this.openModal}
                removeModal={this.cancelAuthBtn}
              />
            )}
            {login && <Login loadSignupPage={this.openModal} 
              removeModal={this.cancelAuthBtn}
            />}
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  quantity: state.shoppingCart.quantity,
  price: state.shoppingCart.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  CartProductList: id => dispatch(getCartProductList(id)),
  logoutUser : () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbar);
