import CoinActionTypes from './coin.types';


const INITIAL_STATE = {
    balance: null
};

const coinReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CoinActionTypes.GET_COIN:
			return {
				...state,
				balance: action.payload
			}
		default:
			return state;
	}
};

export default coinReducer;
