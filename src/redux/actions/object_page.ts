import { Dispatch } from "react"
import axios from "axios"

import $api from '../../http'

import { ObjectPageActionTypes, ObjectPageActions } from '../types/IObjectPage'

export const fetchObjectPageItemById = (id: string) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		dispatch(({
			type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED,
			payload: false
		}))

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/catalog/${id}`).then(({ data }) => {
			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID,
				payload: data
			}))

			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED,
				payload: true
			}))
		})
	}
}

export const fetchObjectPageItemByIdRooms = (id: string, date: {
	checkin_date: string,
	checkout_date: string,
}) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		dispatch(({
			type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_ROOMS,
			payload: false
		}))

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/catalog/${id}/rooms`, { params: { ...date } }).then(({ data }) => {
			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_ROOMS,
				payload: data.results
			}))

			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_ROOMS,
				payload: true
			}))
		})
	}
}

export const fetchObjectPageRoomItemById = (id: string, date: {
	checkin_date: string,
	checkout_date: string,
}) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		dispatch(({
			type: ObjectPageActionTypes.SET_OBJECT_PAGE_ROOM_ITEM_BY_ID_IS_LOADED,
			payload: false
		}))

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/catalog/rooms/${id}`, { params: { ...date } }).then(({ data }) => {
			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_ROOM_ITEM_BY_ID,
				payload: data
			}))

			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_ROOM_ITEM_BY_ID_IS_LOADED,
				payload: true
			}))
		})
	}
}

export const fetchObjectPageItemByIdServices = (id: string) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		dispatch(({
			type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_SERVICES,
			payload: false
		}))

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/hotels/${id}/services`).then(({ data }) => {
			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_SERVICES,
				payload: data.results
			}))

			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_SERVICES,
				payload: true
			}))
		})
	}
}

export const fetchObjectPageItemByIdTerms = (id: string) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		dispatch(({
			type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_TERMS,
			payload: false
		}))

		axios.get(`${process.env.REACT_APP_API_DOMEN}/hotels/hotels/${id}/settings`).then(({ data }) => {
			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_TERMS,
				payload: data
			}))

			dispatch(({
				type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_TERMS,
				payload: true
			}))
		})
	}
}

export const sendObjectPageBlocked = (id: string | null) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		$api.post("/hotels/admin/catalog/block", {
			hotels: [id],
			is_blocked: true
		}).then(() => {
			window.location.href = "/cabinet/objects"
		})
	}
}


export const sendObjectPageStatus = (id: string | null, status: string, comment: string) => {
	return async (dispatch: Dispatch<ObjectPageActions>) => {
		$api.post(`/hotels/admin/approve-hotels/${id}`, {
			status,
			room_categories: [],
			comment
		}).then(() => {
			window.location.href = "/cabinet/objects"
		})
	}
}