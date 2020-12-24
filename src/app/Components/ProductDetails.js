import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getSingleProduct } from "./../redux/actions/productAction";
import { addTocart } from "./../redux/actions/cartAction";
import Navbar from "../Components/Navbar";
import TopNavbar from "../Components/TopNavbar";

import "./../asset/scss/productDetails.scss";
import Rating from "./Rating";

export class ProductDetails extends React.Component {
  state = {
    qty: 1,
    size: "M",
    color: "red",
    carti_d: ""
  };

  componentDidMount() {
    const {
      params: { productId }
    } = this.props.match;
    this.props.getProduct(productId);
    this.setState({ cart_id: localStorage.getItem("cartId") });
  }

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

  selectColor = color => this.setState({ color });
  selectSize = size => this.setState({ size });

  addItemTocart = id => {
    const { cart_id, size, color } = this.state;
    const data = {
      cart_id,
      product_id: id,
      attributes: `${size}, ${color}`
    };

    this.props.addcart(data);
  };

  render() {
    const { product } = this.props;
    const img = process.env.image;

    const colors = [
      "cornflowerBlue",
      "darkTurquoise",
      "red",
      "darkOrange",
      "yellow",
      "purple",
      "limeGreen",
      "darkViolet"
    ];
    const sizes = ["XL", "S", "M", "LM", "XS", "XXL"];

    return (
      <Fragment>
        <Navbar />
        <div className="product">
          <div className="product__image">
            <img src={`${img}/${product.image}`} />
          </div>
          <div className="product-info">
            <div className="rating">
              <Rating rating={2} />
              {/* <Rating  /> */}
            </div>
            <h2 className="name">{product.name}</h2>
            <p className="price">&euro;{product.price} </p>
            <div className="product__color">
              <p className="label">Color</p>
              <div>
                {colors.map((color, i) => (
                  <span
                    key={i}
                    onClick={() => this.selectColor(color)}
                    style={{ backgroundColor: color }}
                    className={
                      this.state.color === colors[i] ? "active-color" : ""
                    }
                  />
                ))}
              </div>
            </div>
            <div className="product__size">
              <p className="label">Size</p>
              <div>
                {sizes.map((size, i) => (
                  <span
                    key={i}
                    className={
                      this.state.size === sizes[i] ? "active-size" : ""
                    }
                    onClick={() => this.selectSize(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="product__quatity">
              <p className="label">Quatity</p>
              <div>
                <span onClick={this.decrement}> - </span>
                <span className="product-value"> {this.state.qty}</span>
                <span onClick={this.increment}> + </span>
              </div>
            </div>
            <button
              className="product__cart-btn"
              onClick={() => this.addItemTocart(product.product_id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productDetails
});

const mapDispatchToProps = dispatch => ({
  getProduct: productId => dispatch(getSingleProduct(productId)),
  addcart: itemBody => dispatch(addTocart(itemBody))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
