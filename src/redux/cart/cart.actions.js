import axios from 'axios';
import CartActionTypes from './cart.types';

import { buyer, buyerURL, seller, integrated, integratedURL } from '../port';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const getCartItems = () => (dispatch) => {
	const token = localStorage.getItem('jwtToken');
	return axios
		.get(`http://${buyerURL}:${buyer}/api/customer/cart`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.then((res) => {
			console.log(res.data.data, 'hoba');
			let data = [];
			res.data.data.map(
				({
					id,
					product_id,
					product_name,
					product_image,
					product_price,
					product_qty,
				}) => {
					data.push({
						id,
						product_id,
						product_name,
						product_image,
						product_price,
						product_qty,
					});
				},
			);
			console.log(data, 'data');

			dispatch({
				type: CartActionTypes.GET_CART_ITEMS,
				payload: data,
			});
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
};

export const addItem = (item) => (dispatch) => {
	console.log('addItem', item);
	const { product_id } = item;
	const token = localStorage.getItem('jwtToken');
	const dataToCart = {
		product_id: product_id,
		qty: 1,
	};
	const dataToReducer = {
		...item,
		product_qty: 1,
	};

	axios
		.post(
			`http://${buyerURL}:${buyer}/api/customer/cart`,
			dataToCart,
			{
				headers: {
					Authorization: 'Bearer ' + token
				},
			},
		)
		.then((res) => {
			console.log('ini respon', res);
			dispatch({
				type: CartActionTypes.ADD_ITEM,
				payload: dataToReducer,
			});
		})
		.catch((err) => {
			console.log(err);
		});

	// return {
	// 	type: CartActionTypes.ADD_ITEM,
	// 	payload: item,
	// };
};

export const removeItemCustom = (item, removeNum) => (dispatch) => {
	const token = localStorage.getItem('jwtToken');
	const newItemQty = item.product_qty - removeNum;
	const newData = {
		id: item.id,
		qty: newItemQty,
	};

	axios
		.put(`http://${buyerURL}:${buyer}/api/customer/cart`, newData)
		.then((res) => {
			console.log('sukses put', res);
			dispatch(removeItem(item));
		})
		.catch((err) => {
			alert(err.response.data.message)
		});
};

export const purchaseProducts = () => (dispatch) => {
	axios
		.post(`http://${integratedURL}:${integrated}/api/customer/purchase`)
		.then((res) => {
			alert(res.data.message);
			dispatch(clearAllItemsFromCart());
		})
		.catch((err) => {
			console.log(err);
		});
};

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const clearAllItemsFromCart = () => ({
	type: CartActionTypes.CLEAR_ALL_ITEMS_FROM_CART,
});
