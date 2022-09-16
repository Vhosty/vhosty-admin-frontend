import { LoginState, LoginActionTypes, LoginActions } from "../types/ILogin";

const initialState: LoginState = {
	isPending: false,
	errorMessage: "",
};

const login = (state = initialState, action: LoginActions) => {
	if (action.type === LoginActionTypes.SET_LOGIN_IS_PENDING) {
		return {
			...state,
			isPending: action.payload,
		};
	}

	if (action.type === LoginActionTypes.SET_LOGIN_ERROR_MESSAGE) {
		return {
			...state,
			errorMessage: action.payload,
		};
	}

	return state;
};

export default login;
