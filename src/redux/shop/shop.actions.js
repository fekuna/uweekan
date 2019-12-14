import axios from 'axios';

import { sellerURL, seller } from '../port'

import ShopActionTypes from './shop.types';

export const getItems = () => (dispatch) => {
	axios
		.get(`http://${sellerURL}:${seller}/api/seller/product`)
		.then((res) => {
			console.log(res.data.data);
			dispatch({
				type: ShopActionTypes.GET_ITEMS,
				payload: res.data.data,
			});
		})
		.catch((err) => console.log('eeh', err));
};

export const addItem = (item, history) => (dispatch) => {
	const token = localStorage.getItem('jwtToken');
	axios
		.post(`http://${sellerURL}:${seller}/api/seller/product`, item, {
			headers: {
				Authorization: 'Bearer ' + token,
				'Content-Type': 'multipart/form-data',
			},
		})
		.then((res) => {
			console.log('addProduct', res);
			history.push('/');
		})
		.catch((err) => {
			console.log(err.message, 'kocak');
		});
};
