import { Dispatch } from "redux"
import { Moment } from "moment"

import { CabinetUsersActions, CabinetUsersTypeUser, CabinetUsersActionTypes } from '../../types/ICabinetUsers'

import $api from "../../../http"

export const fetchCabinetUsers = (type: CabinetUsersTypeUser, date: { from: Moment, to: Moment }, search: string) => {
	return async (dispatch: Dispatch<CabinetUsersActions>) => {
		dispatch({
			type: CabinetUsersActionTypes.SET_CABINET_USERS_IS_LOADED,
			payload: false
		})

		const filters: {
			registered_gte?: string,
			registered_lte?: string,
			search_text?: string
		} = {
			search_text: search
		}

		if (date.to.isAfter(date.from)) {
			filters.registered_gte = date.from.format("YYYY-MM-DD")
			filters.registered_lte = date.to.format("YYYY-MM-DD")
		}

		if (type === CabinetUsersTypeUser.USERS) {
			$api.get("/users/admin/users", { params: { limit: 100, ...filters } }).then(({ data }) => {
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
			$api.get("/companies/admins/employees", { params: { limit: 100, ...filters } }).then(({ data }) => {
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

export const setCabinetUsersFiltersDate = (date: {
	from: Moment,
	to: Moment
}) => ({
	type: CabinetUsersActionTypes.SET_CABINET_USERS_FILTERS_DATE,
	payload: date
})

export const setCabinetUsersFiltersSearch = (search: string) => ({
	type: CabinetUsersActionTypes.SET_CABINET_USERS_FILTERS_SEARCH,
	payload: search
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
}, type: CabinetUsersTypeUser, date: {
	from: Moment,
	to: Moment
}, search: string) => {
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

			dispatch(fetchCabinetUsers(type, date, search) as any)
		})
	}
}