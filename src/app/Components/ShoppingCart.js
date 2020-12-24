import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../asset/scss/shoppingCart.scss';
import img from '../asset/images/shirt7.png';

export class ShoppingCart extends Component {
	state = {
		qty: 1
	};

	increment = () => {
		this.setState(prevState => {
			return { qty: prevState.qty + 1 };
		});
	};

	decrement = () => {
		if (this.state.qty > 1) {
			this.setState(prevState => {
				return { qty: prevState.qty - 1 };
			});
		}
	};

	render() {
    const { active, itemList, isLoggedIn, openModal } = this.props;
		const newClass = active ? 'active' : '';
		const img = process.env.image;
		return (
      <div className={`shopping-cart ${newClass}`}>
        <div className="shopping-cart__body">
          <p
            className="shopping-cart__cancel-btn"
            onClick={() => this.props.cancelBtn()}
          >
            ✕
          </p>
          <h2 className="shopping-cart__header"> 4 Items In Your Cart</h2>{" "}
          <table>
            <thead>
              <tr>
                <th className="shopping-cart__item">Item</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {itemList &&
                itemList.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="shopping-cart__item">
                        <img
                          src={`${img}/${item.image}`}
                          className="shopping-cart__img"
                        />
                        <div className="shopping-cart__details">
                          <h4 className="shopping-cart__item__title">
                            {item.name}
                          </h4>
                          <p className="shopping-cart__item__removeItem">
                            <span>✕</span> Remove
                          </p>
                        </div>
                      </td>
                      <td>{item.attributes}</td>
                      <td className="shopping-cart__quantity">
                        <span onClick={this.decrement}> - </span>
                        <span className="product-value"> {this.state.qty}</span>
                        <span onClick={this.increment}> + </span>
                      </td>
                      <td>&euro;{item.price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <footer className="footer">
          <button
            className="footer-back"
            onClick={() => this.props.cancelBtn()}
          >
            Back to Shop
          </button>
          <button className="footer-checkout" onClick={() => isLoggedIn() === false && openModal("login")}>Checkout</button>
        </footer>
      </div>
    );
	}
}

const mapStateToProps = state => ({
	itemList: state.shoppingCart.products
});

const mapDispatchToProps = dispatch => ({
	// cartProductList: () => dispatch(getCartProductList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
