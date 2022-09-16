import { Dispatch } from "redux";
import axios from 'axios'

import { SubmissionError } from "redux-form";

import {
	LoginErrorMessageTypes,
	LoginActionTypes,
	LoginActions,
} from "../types/ILogin";

import { Login } from '../../models/ILogin'

export const sendLogin = (data: Login) => {
	return async (dispatch: Dispatch<LoginActions>) => {
		dispatch({
			type: LoginActionTypes.SET_LOGIN_IS_PENDING,
			payload: true,
		});

		return axios.post(`${process.env.REACT_APP_API_DOMEN}/admins/login`, data)
			.then(({ data }) => {
				localStorage.setItem("accessToken", data.access_token);

				window.location.href = "/cabinet/main";
			})
			.catch(({ response }) => {
				const errorMessage = response.data.detail

				dispatch({
					type: LoginActionTypes.SET_LOGIN_IS_PENDING,
					payload: false,
				});

				if (errorMessage === "Invalid password or username.") {
					dispatch({
						type: LoginActionTypes.SET_LOGIN_ERROR_MESSAGE,
						payload: LoginErrorMessageTypes.INCORRECT_LOGIN_OR_PASSWORD
					})
				}

				throw new SubmissionError({
					login: " ",
					password: " ",
				});
			});
	};
};
