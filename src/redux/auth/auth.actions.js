import axios from 'axios';
import { setAuthToken } from './auth.utils';
import { clearAllItemsFromCart } from '../cart/cart.actions';
import jwtDecode from 'jwt-decode';

import AuthTypes from './auth.types';

// import jwtDecode from 'jwt-decode';

// Register User
export const registerUser = (data, history) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/customer/register', data)
		.then((res) => history.push('/login'))
		.catch((err) => console.log(err));
};

// Login Buyr
export const buyerLogin = (userData, history) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/customer/login', userData)
		.then((res) => {
			// console.log('data nich', res.data);
			// Save to localStorage
			const { token } = res.data;
			// Set Token to LocalStorage
			localStorage.setItem('jwtToken', token);
			// Decode JWT
			const decoded = jwtDecode(token);
			// Set User id to LocalStorage
			localStorage.setItem('userId', decoded.sub);
			// Set Scope user
			localStorage.setItem('role', decoded.scopes[0])
			// Set Token to Auth Header
			setAuthToken(token);
			dispatch(setCurrentUser(decoded.sub));
			history.push('/')
		});
};
// Login Seller
export const sellerLogin = (userData, history) => (dispatch) => {
	axios
		.post('http://127.0.0.1:8000/api/seller/login', userData)
		.then((res) => {
			console.log('hello');
			// console.log('data nich', res.data);
			// Save to localStorage
			const { token } = res.data;
			// Set Token to LocalStorage
			localStorage.setItem('jwtToken', token);
			// Decode JWT
			const decoded = jwtDecode(token);
			// Set User id to LocalStorage
			localStorage.setItem('userId', decoded.sub);
			// Set Scope user
			localStorage.setItem('role', decoded.scopes[0])
			// Set Token to Auth Header
			setAuthToken(token);
			dispatch(setCurrentUser(decoded.sub));
			history.push('/')
		});
};

export const onCheckLoginUser = () => dispatch => {
	const token = localStorage.getItem('jwtToken')
	const userId = localStorage.getItem('userId')

	if(token) {
		setAuthToken(token)
		dispatch(setCurrentUser(userId))
	}

}

// Log user out
export const logoutUser = () => (dispatch) => {
	// Remove Token from localStorage
	localStorage.removeItem('jwtToken');
	// Remove userId from localStorage
	localStorage.removeItem('userId');
	// Remove role from localStorage
	localStorage.removeItem('role');
	// Remove auth header for future request
	setAuthToken(false);
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser(''));
	dispatch(clearAllItemsFromCart());
};

// Set Logged In user
export const setCurrentUser = (data) => {
	return { type: AuthTypes.SET_CURRENT_USER_BUYER, payload: data };
};
