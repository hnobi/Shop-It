import React, { useState, useEffect } from 'react';
import countryIcon from '../asset/images/gbr.png';
import notificationImg from '../asset/images/icons-bag.png';
import './../asset/scss/top-navbar.scss';
import { connect } from 'react-redux';
import { getCartProductList } from './../redux/actions/cartAction';
// const TopNavbar = () => {

class TopNavbar extends React.Component {
	componentDidMount() {
		const id = localStorage.getItem('cartId');
		this.props.CartProductList(id);
	}

	render() {
		const references = ['Daily Deals', 'Sell', 'Help & Contact'];
		const { quantity, price } = this.props;
		return (
			<div>
				<div className="top-nav">
					<div className="top-nav__registration">
						Hi!<span> Sign in</span> or <span>Register</span>
					</div>

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
							<div className="notification">
								<img src={notificationImg} alt="country logo" />
								{quantity > 0 && <span className="badge">{quantity}</span>}
							</div>
							<span> Your bag : &euro; {price || 0}</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	quantity: state.shoppingCart.quantity,
	price: state.shoppingCart.totalPrice
});

const mapDispatchToProps = dispatch => ({
	CartProductList: id => dispatch(getCartProductList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
