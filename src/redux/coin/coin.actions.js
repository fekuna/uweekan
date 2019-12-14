import axios from 'axios';
import coinTypes from './coin.types';

import { buyer, buyerURL, coin, coinURL } from '../port';

export const coinTopUp = (nominal, history) => (dispatch) => {
	localStorage.getItem('userId');
	axios
		.get(`http://${buyerURL}:${buyer}/api/customer/`)
		.then((res) => {
			const username = res.data.data.username;
			const dataTopUp = {
				username_destination: username,
				topup_balance: nominal,
			};
			return axios.post(
				`http://${coinURL}:${coin}/api/coin/topup`,
				dataTopUp,
			);
		})
		.then((res) => {
			console.log('topup nich', res);
			history.push('/')
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getCoin = () => (dispatch) => {
	const token = localStorage.getItem('jwtToken');

	axios
		.get(`http://${buyerURL}:${buyer}/api/customer/`, {
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
		.then((res) => {
			console.log('getcoin username');
			const username = res.data.data.username;
			return axios.get(
				`http://${coinURL}:${coin}/api/coin/balance?username=${username}`,
				{
					headers: {
						Authorization: 'Bearer ' + token,
					},
				},
			);
		})
		.then((res) => {
			console.log('getcoin', res.data.data[0].balance);
			const currentCoin = res.data.data[0].balance;
			dispatch({
				type: coinTypes.GET_COIN,
				payload: currentCoin,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
