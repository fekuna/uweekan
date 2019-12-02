import AuthTypes from './auth.types';

const initialState = {
	isAuthenticated: false,
	userId: "",
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AuthTypes.SET_CURRENT_USER_BUYER:
			return {
                ...state,
                isAuthenticated: action.payload !== "",
                userId: action.payload
			};
		default:
			return state;
	}
};

export default authReducer;
