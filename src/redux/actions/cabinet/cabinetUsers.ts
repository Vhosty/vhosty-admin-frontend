import { Dispatch } from "redux"

import { CabinetUsersActions, CabinetUsersTypeUser, CabinetUsersActionTypes } from '../../types/ICabinetUsers'

import $api from "../../../http"

export const fetchCabinetUsers = (type: CabinetUsersTypeUser) => {
	return async (dispatch: Dispatch<CabinetUsersActions>) => {
		dispatch({
			type: CabinetUsersActionTypes.SET_CABINET_USERS_IS_LOADED,
			payload: false
		})

		if (type === CabinetUsersTypeUser.USERS) {
			$api.get("/users/admin/users", { params: { limit: 100 } }).then(({ data }) => {
				dispatch({
					type: CabinetUsersActionTypes.SET_CABINET_USERS,
					payload: data.results
				})

				dispatch({
					type: CabinetUsersActionTypes.SET_CABINET_USERS_IS_LOADED,
					payload: true
				})
			})
		}

		if (type === CabinetUsersTypeUser.OBJECT_OWNERS) {
			$api.get("/companies/admins/employees", { params: { limit: 100 } }).then(({ data }) => {
				dispatch({
					type: CabinetUsersActionTypes.SET_CABINET_USERS,
					payload: data.results
				})

				dispatch({
					type: CabinetUsersActionTypes.SET_CABINET_USERS_IS_LOADED,
					payload: true
				})
			})
		}
	}
}

export const setCabinetUsersTypeUser = (type: CabinetUsersTypeUser) => ({
	type: CabinetUsersActionTypes.SET_CABINET_USERS_TYPE,
	payload: type
}) 