import { Dispatch } from 'redux'

import {
	CabinetObjectsActionTypes,
	CabinetObjectsActions,
} from "../../types/ICabinetObjects";

import $api from '../../../http';

export const fetchCabinetObjects = (status: string, search: string) => {
	return async (dispatch: Dispatch<CabinetObjectsActions>) => {
		dispatch({
			type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS_IS_LOADED_OBJECTS,
			payload: false
		})

		const query: any = { limit: 100, search }

		if (status && status !== "") {
			query.status = status
		}


		$api.get("/hotels/admin/catalog", { params: query }).then(({ data }) => {
			dispatch({
				type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS_IS_LOADED_OBJECTS,
				payload: true
			})

			dispatch({
				type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS,
				payload: data.results
			})
		})
	}
}

export const setObjectsDeleteIds = (id: {
	hotel_id: number,
	room_category_id: string
}) => ({
	type: CabinetObjectsActionTypes.SET_OBJECTS_DELETE_IDS,
	payload: id
})

export const setFillObjectsDeleteIds = (ids: {
	[key: string]: {
		hotel_id: number,
		room_category_id: string
	}
}) => ({
	type: CabinetObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS,
	payload: ids
})

export const sendDeleteObjects = (ids: {
	[key: string]: {
		hotel_id: number,
		room_category_id: string
	}
}, status: string, search: string) => {
	return async (dispatch: Dispatch<CabinetObjectsActions>) => {
		dispatch({
			type: CabinetObjectsActionTypes.SET_OBJECTS_IS_SEND_DELETE,
			payload: true
		})

		const to_delete: number[] = []

		Object.keys(ids).map((key) => {
			to_delete.push(ids[key].hotel_id)
		})

		$api.post("/hotels/admin/catalog/block", {
			hotels: to_delete,
			is_blocked: true
		}).then(() => {
			dispatch({
				type: CabinetObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS,
				payload: {}
			})

			dispatch(fetchCabinetObjects(status, search) as any)
		})
	}
}

export const setCabinetObjectsFiltersStatus = (status: string) => ({
	type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS_FILTERS_STATUS,
	payload: status
})

export const setCabinetObjectsFiltersSearch = (status: string) => ({
	type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS_FILTERS_SEARCH,
	payload: status
})