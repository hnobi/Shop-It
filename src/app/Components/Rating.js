import React from 'react';

import './../asset/scss/productDetails.scss';

class Rating extends React.Component {
	state = {
		rating: this.props.rating || null,
		temp_rating: this.props.rating || null
	};

	rate = rating => {
		// should only take run if rating is not from props
		// rating from props means, this is already rated
		if (!this.props.rating) {
			this.setState({
				rating: rating,
				temp_rating: rating
			});
		}
	};

	starOver = rating => {
		// should only take run if rating is not from props
		// rating from props means, this is already rated
		if (!this.props.rating) {
			this.setState({ rating });
		}
	};

	starOut = () => {
		this.setState({
			rating: this.state.temp_rating
		});
	};

	render() {
		const stars = [...Array(5)].map((_, i) => {
			let klass = 'star-rating__star';
			
			// 0 <= null is 'true' that is I have "this.state.rating != null"
			if (i <= this.state.rating && this.state.rating != null) {
				klass += ' is-selected';
			}        
			return (
				<label
					key={i}
					className={klass}
					onClick={() => this.rate(i)}
					onMouseOver={() => this.starOver(i)}
					onMouseOut={this.starOut}
				>
					★
				</label>
			);
		});
		return <div className="star-rating">{stars}</div>;
	}
}

export default Rating;
