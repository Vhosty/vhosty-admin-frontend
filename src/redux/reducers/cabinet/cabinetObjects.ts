import { CabinetObjectsState, CabinetObjectsActionTypes, CabinetObjectsActions } from '../../types/ICabinetObjects';

const initialState: CabinetObjectsState = {
	isLoadedObjects: false,
	objects: [],

	filters: {
		status: "",
		search: ""
	},

	isSendDelete: false,
	deleteIds: {},
}

const cabinetObjects = (state = initialState, action: CabinetObjectsActions) => {
	if (action.type === CabinetObjectsActionTypes.SET_CABINET_OBJECTS_IS_LOADED_OBJECTS) {
		return {
			...state,
			isLoadedObjects: action.payload
		}
	}

	if (action.type === CabinetObjectsActionTypes.SET_CABINET_OBJECTS) {
		return {
			...state,
			objects: action.payload
		}
	}

	if (action.type === CabinetObjectsActionTypes.SET_CABINET_OBJECTS_FILTERS_STATUS) {
		return {
			...state,
			filters: {
				...state.filters,
				status: action.payload
			}
		}
	}

	if (action.type === CabinetObjectsActionTypes.SET_CABINET_OBJECTS_FILTERS_SEARCH) {
		return {
			...state,
			filters: {
				...state.filters,
				search: action.payload
			}
		}
	}

	if (action.type === CabinetObjectsActionTypes.SET_OBJECTS_DELETE_IDS) {
		const newObjects = { ...state.deleteIds }

		if (state.deleteIds[action.payload.hotel_id]) {
			delete newObjects[action.payload.hotel_id]
		} else {
			newObjects[action.payload.hotel_id] = action.payload
		}

		return {
			...state,
			deleteIds: newObjects
		}
	}

	if (action.type === CabinetObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS) {
		return {
			...state,
			deleteIds: action.payload
		}
	}

	if (action.type === CabinetObjectsActionTypes.SET_OBJECTS_IS_SEND_DELETE) {
		return {
			...state,
			isSendDelete: action.payload
		}
	}

	return state
}

export default cabinetObjects