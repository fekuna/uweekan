import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/CustomButton/CustomButton'
import { cartItemsTotal } from '../../redux/cart/cart.utils';

import { purchaseProducts } from '../../redux/cart/cart.actions'

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, purchaseProducts }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((cartItem, idx) => <CheckoutItem key={idx} cartItem={cartItem} />)}
		{console.log('hawwwww', cartItems)}
		<div className='total'>TOTAL: Rp. {cartItemsTotal(cartItems)}</div>
		{/* <div className='test-warning'>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</div> */}
		<CustomButton style={{width: '7rem'}} onClick={purchaseProducts}>PAY NOW</CustomButton>
	</div>
);

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems
})

const mapDispatchToProps = dispatch => ({
	purchaseProducts: () => dispatch(purchaseProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
