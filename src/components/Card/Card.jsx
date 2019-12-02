import React from 'react';
import { connect } from 'react-redux'

import Button from '../CustomButton/CustomButton';

import { addItem } from '../../redux/cart/cart.actions';

import './card.scss';

const Card = ({ id, productImage, productPrice, productName, ...props }) => {
	const addToCartHandler = () => {
		const data = {
			product_id: id,
			product_name: productName,
			product_image: productImage,
			product_price: productPrice,
		};

		props.onAddToCart(data)
	};

	return (
		<div className='card'>
			<div className='imageContainer'>
				<img src={productImage} className='cardImage' />
			</div>
			<div className='cardDetailContainer'>
				<div className='cardDetail'>
					<div className='cardTitle'>{productName}</div>
					<div className='cardPrice'>Rp.{productPrice}</div>
				</div>
				<div className='buttonContainer'>
					<Button onClick={addToCartHandler}>Buy</Button>
				</div>
			</div>
		</div>
	);
};

const mapDispachToProps = dispatch => ({
	onAddToCart: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispachToProps)(Card);
