import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/CategoriesPage';
import ProductDetails from './Components/ProductDetails';

export default class Routes extends Component {
	render() {
		return (
			// <BrowserRouter>
				<Switch>
					<Route exact path="/products/:productId/details" component={ProductDetails} />
					<Route exact path="/" component={Home} />
				</Switch>
			// </BrowserRouter>
		);
	}
}

