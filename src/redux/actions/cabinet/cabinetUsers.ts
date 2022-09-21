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

export const setUsersDeleteIds = (id: number) => ({
	type: CabinetUsersActionTypes.SET_USERS_DELETE_IDS,
	payload: id
})

export const setFillUsersDeleteIds = (ids: {
	[key: string]: number
}) => ({
	type: CabinetUsersActionTypes.SET_FILL_USERS_DELETE_IDS,
	payload: ids
})

export const sendDeleteUsers = (ids: {
	[key: string]: number
}, type: CabinetUsersTypeUser) => {
	return async (dispatch: Dispatch<CabinetUsersActions>) => {
		dispatch({
			type: CabinetUsersActionTypes.SET_USERS_IS_SEND_DELETE,
			payload: true
		})

		const to_delete: number[] = []

		Object.keys(ids).map((key) => {
			to_delete.push(ids[key])
		})

		$api.post("/users/admin/users/block", {
			user_ids: to_delete,
			is_blocked: true
		}).then(() => {
			dispatch({
				type: CabinetUsersActionTypes.SET_FILL_USERS_DELETE_IDS,
				payload: {}
			})

			dispatch(fetchCabinetUsers(type) as any)
		})
	}
}