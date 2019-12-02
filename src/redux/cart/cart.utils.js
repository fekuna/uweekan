import axios from 'axios';

export const addItemToCart = (cartItems, cartItemToAdd) => {
	// console.log(cartItemToAdd, 'tolooonggg');
	// const { id } = cartItemToAdd;
	// const userId = localStorage.getItem('userId');
	// const dataToCart = {
	// 	idProduct: id,
	// 	qty: 1,
	// };
	// console.log(id, userId)
	// console.log('userId', localStorage.getItem('userId'));

	// console.log('Token', localStorage.getItem('jwtToken'));
	// const token = localStorage.getItem('jwtToken');

	// console.log('carttCurr', cartItems)
	// console.log('carttAdd', cartItemToAdd);
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.product_id === cartItemToAdd.product_id,
	);
	// console.log('Existing Item', existingCartItem)

	if (existingCartItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.product_id === cartItemToAdd.product_id
					? { ...cartItem, product_qty: cartItem.product_qty + 1 }
					: cartItem,
		);
	}

	return [ ...cartItems, { ...cartItemToAdd, product_qty: 1 } ];

	// axios
	// 	.post(
	// 		`http://127.0.0.1:8000/api/customer/${userId}/cart`,
	// 		dataToCart,
	// 	)
	// 	.then((res) => {
	// 		console.log(res, 'axiosss');
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.product_id === cartItemToRemove.product_id,
	);

	if (existingCartItem.product_qty === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.product_id !== cartItemToRemove.product_id,
		);
	}

	return cartItems.map(
		(cartItem) =>
			cartItem.product_id === cartItemToRemove.product_id
				? { ...cartItem, product_qty: cartItem.product_qty - 1 }
				: cartItem,
	);
};

export const cartItemsCount = (cartItems) => {
	return cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.product_qty,
		0,
	);
};

export const cartItemsTotal = (cartItems) => {
	return cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity +
			cartItem.product_qty * cartItem.product_price,
		0,
	);
};
