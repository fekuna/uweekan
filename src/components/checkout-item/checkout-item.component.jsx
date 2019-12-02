import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addItem,
	removeItemCustom,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
	cartItem,
	clearItem,
	addItem,
	removeItem,
}) => {
	const {
		product_name,
		product_image,
		product_price,
		product_qty,
	} = cartItem;
	console.log('cartitem', cartItem);
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={product_image} alt='item' />
			</div>
			<span className='name'>{product_name}</span>
			<span className='quantity'>
				<div
					className='arrow'
					onClick={() => removeItem(cartItem, 1)}
				>
					&#10094;
				</div>
				<span className='value'>{product_qty}</span>
				<div
					className='arrow'
					onClick={() => addItem(cartItem)}
				>
					&#10095;
				</div>
			</span>
			<span className='price'>{product_price}</span>
			<div
				className='remove-button'
				onClick={() => clearItem(cartItem)}
			>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item, removeNum) =>
		dispatch(removeItemCustom(item, removeNum)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
