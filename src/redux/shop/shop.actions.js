import axios from 'axios';

import jwtDecode from 'jwt-decode';

import ShopActionTypes from './shop.types';

export const getItems = () => (dispatch) => {
	axios
		.get('/api/seller/product')
		.then((res) => {
			dispatch({
				type: ShopActionTypes.GET_ITEMS,
				payload: res.data.data,
			});
		})
		.catch((err) => console.log('eeh', err));
};


export const addItem = (item, history) => dispatch => {
	const token = localStorage.getItem('jwtToken')
	axios.post('http://127.0.0.1:8000/api/seller/product', item, {
		headers: {
			Authorization: 'Bearer ' + token,
		},
	})
	.then((res) => {
		console.log('addProduct', res);
		history.push('/')
	}).catch((err) => {
		console.log(err.message, 'kocak');
	});
}