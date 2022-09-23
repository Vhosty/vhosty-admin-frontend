import moment from 'moment'

import { CabinetUsersState, CabinetUsersTypeUser, CabinetUsersActions, CabinetUsersActionTypes } from '../../types/ICabinetUsers'

const initialState: CabinetUsersState = {
	users: [],
	isLoaded: false,

	type: CabinetUsersTypeUser.USERS,

	filters: {
		date: {
			from: moment(),
			to: moment()
		},

		search: ""
	},

	isSendDelete: false,
	deleteIds: {},
}

const cabinetUsers = (state = initialState, action: CabinetUsersActions) => {
	if (action.type === CabinetUsersActionTypes.SET_CABINET_USERS) {
		return {
			...state,
			users: action.payload
		}
	}

	if (action.type === CabinetUsersActionTypes.SET_CABINET_USERS_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload
		}
	}

	if (action.type === CabinetUsersActionTypes.SET_CABINET_USERS_TYPE) {
		return {
			...state,
			type: action.payload,
			deleteIds: {},
		}
	}

	if (action.type === CabinetUsersActionTypes.SET_CABINET_USERS_FILTERS_DATE) {
		return {
			...state,
			filters: {
				...state.filters,
				date: action.payload
			}
		}
	}

	if (action.type === CabinetUsersActionTypes.SET_CABINET_USERS_FILTERS_SEARCH) {
		return {
			...state,
			filters: {
				...state.filters,
				search: action.payload
			}
		}
	}

	if (action.type === CabinetUsersActionTypes.SET_USERS_DELETE_IDS) {
		const newObjects = { ...state.deleteIds }

		if (state.deleteIds[action.payload]) {
			delete newObjects[action.payload]
		} else {
			newObjects[action.payload] = action.payload
		}

		return {
			...state,
			deleteIds: newObjects
		}
	}

	if (action.type === CabinetUsersActionTypes.SET_FILL_USERS_DELETE_IDS) {
		return {
			...state,
			deleteIds: action.payload
		}
	}

	if (action.type === CabinetUsersActionTypes.SET_USERS_IS_SEND_DELETE) {
		return {
			...state,
			isSendDelete: action.payload
		}
	}

	return state
}

export default cabinetUsers