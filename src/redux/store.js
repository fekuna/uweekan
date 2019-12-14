import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from 'redux';
import thunk from 'redux-thunk';

import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import authReducer from './auth/auth.reducer';
import coinReducer from './coin/coin.reducer';

const initialState = {};

const middleware = [ thunk ];

const rootReducer = combineReducers({
	cart: cartReducer,
	shop: shopReducer,
	auth: authReducer,
	coin: coinReducer,
});

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

export default store;
