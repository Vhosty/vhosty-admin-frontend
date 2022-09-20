import { CabinetUsersState, CabinetUsersTypeUser, CabinetUsersActions, CabinetUsersActionTypes } from '../../types/ICabinetUsers'

const initialState: CabinetUsersState = {
	users: [],
	isLoaded: false,

	type: CabinetUsersTypeUser.USERS
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
			type: action.payload
		}
	}

	return state
}

export default cabinetUsers