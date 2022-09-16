export interface LoginState {
	isPending: boolean;
	errorMessage: LoginErrorMessageTypes | ""
}

export enum LoginErrorMessageTypes {
	INCORRECT_LOGIN_OR_PASSWORD = "Неверно введена почта или пароль"
}

export enum LoginActionTypes {
	SET_LOGIN_IS_PENDING = "SET_LOGIN_IS_PENDING",
	SET_LOGIN_ERROR_MESSAGE = "SET_LOGIN_ERROR_MESSAGE",
}

interface setLoginIsPending {
	type: LoginActionTypes.SET_LOGIN_IS_PENDING;
	payload: boolean;
}

interface setLoginErrorMessage {
	type: LoginActionTypes.SET_LOGIN_ERROR_MESSAGE;
	payload: LoginErrorMessageTypes;
}

export type LoginActions = setLoginIsPending | setLoginErrorMessage;
