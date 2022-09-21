import { CabinetUsersState, CabinetUsersTypeUser, CabinetUsersActions, CabinetUsersActionTypes } from '../../types/ICabinetUsers'

const initialState: CabinetUsersState = {
	users: [],
	isLoaded: false,

	type: CabinetUsersTypeUser.USERS,

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