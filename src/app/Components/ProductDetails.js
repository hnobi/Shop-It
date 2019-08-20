import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from './../redux/actions/productAction';
import Navbar from '../Components/Navbar';
import TopNavbar from '../Components/TopNavbar';

import './../asset/scss/productDetails.scss';
import Rating from './Rating';

export class ProductDetails extends React.Component {
	state = {
		qty: 1,
		activeSize: null
	};

	componentDidMount() {
		const { params: { productId } } = this.props.match;
		this.props.getProduct(productId);
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

	selectSize = size => this.setState({ activeSize: size });

	render() {
		const product = this.props.product;
		const img = process.env.image;
		const colors = ['#6eb2fb', '#00d3ca', '#f62e5f', '#fe5b08', '#f8e71d', '#9016fe', '#7ed322', '#9016fe'];
		const sizes = ['XL', 'S', 'M', 'LM', 'XS', 'XXL'];

		return (
			<Fragment>
				<TopNavbar />
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
							<div>{colors.map((color, i) => <span key={i} style={{ backgroundColor: color }} />)}</div>
						</div>
						<div className="product__size">
							<p className="label">Size</p>
							<div>
								{sizes.map((size, i) => (
									<span
										key={i}
										className={this.state.activeSize === i ? 'active-size' : ''}
										onClick={() => this.selectSize(i)}
									>
										{size}
									</span>
								))}
							</div>
						</div>
						<div className="product__quality">
							<p className="label">Quality</p>
							<div>
								<span onClick={this.decrement}> - </span>
								<span className="product-value"> {this.state.qty}</span>
								<span onClick={this.increment}> + </span>
							</div>
						</div>
						<button className="product__cart-btn"> Add to cart</button>
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
	getProduct: productId => dispatch(getSingleProduct(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
