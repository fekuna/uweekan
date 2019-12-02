import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Cart } from '../../assets/shopping-cart-solid.svg';
import Notification from '../Notification/Notification';
import CartDropdown from '../CartDropdown/CartDropdown';

import { getCartItems } from '../../redux/cart/cart.actions';
import { cartItemsCount } from '../../redux/cart/cart.utils';

import './carticon.scss';

const CartIcon = (props) => {
	const [ isClicked, setIsClicked ] = useState(false);


	useEffect(() => {
		props.onGetCartItems();
	}, []);

	const cartClickHandler = () => {
		setIsClicked((prevState) => !prevState);
	};

	return (
		<div className='cartIcon' onClick={cartClickHandler}>
			<div className='cartContainer'>
				<Cart className='cart' />
				{props.cartItems.length ? (
					<Notification
						cartItemsCount={cartItemsCount(
							props.cartItems,
						)}
					/>
				) : null}
			</div>
			{isClicked ? (
				<CartDropdown items={props.cartItems} />
			) : null}
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
	onGetCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
