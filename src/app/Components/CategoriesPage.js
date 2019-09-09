import React, { Component, Fragment } from 'react';
import TopNavbar from '../Components/TopNavbar';
import Navbar from '../Components/Navbar';
import ItemLists from './ItemLists';
import Pagination from './Pagination';
import { getAllProducts, getProductByCategory } from './../redux/actions/productAction';
import { getCartId } from './../redux/actions/cartAction';
import { getAllcategories } from './../redux/actions/categoryActions';
import { connect } from 'react-redux';
import './../asset/scss/categoriesPage.scss';
import './../asset/scss/card.scss';

export class CategoriesPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			totalCount: null,
			filter: 'all',
			categoryId: 1,
			activeIndex: null
		};
	}

	componentDidMount() {
		const cartIdExist = localStorage.getItem('cartId');

		this.props.products(this.state.page);
		this.props.allcategories();

		// check user has cart Id and if not get new cartId
		if (!cartIdExist) {
			this.props.getCartId();
		}
		
	}

	/**
   *
   *  set page AND fetch list of product for the particular page
   * @memberof CategoriesPage
   */
	setPage = page => {
		this.setState({
			page
		});
		this.getProducts(this.state.filter, { categoryId: this.state.categoryId });
	};

	setCategory = categoryId => {
		this.setState({ categoryId, page: 1, filter: 'category' });
		this.getProducts('category', { categoryId });
	};

	/**
   *
   * call the getproduct or getproductByCategory,
   * based on the parameter passed to the object look ups
   * @memberof CategoriesPage
   */
	getProducts = (filter = 'all', { categoryId }) => {
		const { page } = this.state;

		const fetchAction = {
			all: () => this.props.products(page),
			category: () => this.props.productByCategory(page, categoryId)
		};
		fetchAction[filter]();
	};

	/**
   *
   * List all categorytype 
   * @memberof CategoriesPage
   */
	renderCategoryList = categoryList => {
		return (
			<Fragment>
				<a
					className={this.state.activeIndex === null ? 'activeClass' : ''}
					onClick={() => {
						this.setState({ activeIndex: null });
						this.props.products(this.state.page);
					}}
				>
					All
				</a>

				{categoryList.map((category, index) => (
					<a
						key={category.category_id}
						onClick={() => {
							this.setState({ activeIndex: index });
							this.setCategory(category.category_id);
						}}
						className={this.state.activeIndex === index ? 'activeClass' : ''}
					>
						{category.name}
					</a>
				))}
			</Fragment>
		);
	};

	render() {
		const { categories, allProducts } = this.props;

		return (
			<Fragment>
				<Navbar />
				<div>
					<div className="container">
						<div className="container__banner">
							<div className="banner-text">
								<h1 className="banner-text__gender-type">Men's Wear</h1>
								<ul className="banner-text__list">
									<li>
										<p>Accessories</p>
										<p>ASOS Basic Tops</p>
										<p>Bags</p>
										<p>Accessories</p>
										<p>Caps &amp; Hats</p>
										<p>Gifts</p>
										<p>Grooming</p>
									</li>
									<li>
										<p>Hoodies &amp; Sweatshirts</p>
										<p>Jackets &amp; Coats</p>
										<p>Jeans</p>
										<p>Jewellery</p>
										<p>Joggers</p>
										<p>Gifts</p>
										<p>Jumpers &amp; Cardigans</p>
									</li>
									<li>
										<p>Leather Jackets</p>
										<p>Long Sleeves T-Shirt</p>
										<p>LoungeWear</p>
										<p>Jewellery</p>
										<p>Oversize &amp; Longline</p>
										<p>Polo Shirts</p>
										<p>Shirts</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="items">
							<div className="items__category">
								<h2 className="header">Categories</h2>
								<div className="list">
									{categories.rows && this.renderCategoryList(categories.rows)}
								</div>
							</div>
							<div className="items__list">
								<ItemLists listOfItems={allProducts.rows} />
							</div>
						</div>
						<div className="hot-items"> </div>
						<Pagination
							totalCount={allProducts.count}
							setPage={page => this.setPage(page)}
							pageNumber={this.state.page}
						/>
					</div>

					<div className="news-feed" />
					<footer />
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	allProducts: state.products,
	categories: state.categories
});

const mapDispatchToProps = dispatch => ({
	products: page => dispatch(getAllProducts(page)),
	allcategories: () => dispatch(getAllcategories()),
	productByCategory: (page, categoryId) => dispatch(getProductByCategory(page, categoryId)),
	getCartId: () => dispatch(getCartId())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
