export interface CabinetObjectsState {
	isLoadedObjects: boolean,
	objects: [],

	filters: {
		status: string,
		search: string
	},

	isSendDelete: boolean,
	deleteIds: {
		[key: string]: {
			hotel_id: number,
			room_category_id: string
		}
	},
}

export enum CabinetObjectsActionTypes {
	SET_CABINET_OBJECTS_IS_LOADED_OBJECTS = "SET_CABINET_OBJECTS_IS_LOADED_OBJECTS",
	SET_CABINET_OBJECTS = "SET_CABINET_OBJECTS",

	SET_CABINET_OBJECTS_FILTERS_STATUS = "SET_CABINET_OBJECTS_FILTERS_STATUS",
	SET_CABINET_OBJECTS_FILTERS_SEARCH = "SET_CABINET_OBJECTS_FILTERS_SEARCH",

	SET_OBJECTS_DELETE_IDS = "SET_OBJECTS_DELETE_IDS",
	SET_FILL_OBJECTS_DELETE_IDS = "SET_FILL_OBJECTS_DELETE_IDS",
	SET_OBJECTS_IS_SEND_DELETE = "SET_OBJECTS_IS_SEND_DELETE"
}

interface setCabinetObjectsIsLoadedObjects {
	type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS_IS_LOADED_OBJECTS
	payload: boolean
}

interface setCabinetObjects {
	type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS
	payload: any
}

interface setCabinetObjectsFiltersStatus {
	type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS_FILTERS_STATUS
	payload: string
}

interface setCabinetObjectsFiltersSearch {
	type: CabinetObjectsActionTypes.SET_CABINET_OBJECTS_FILTERS_SEARCH
	payload: string
}

interface setObjectsDeleteIds {
	type: CabinetObjectsActionTypes.SET_OBJECTS_DELETE_IDS
	payload: {
		hotel_id: number,
		room_category_id: string
	}
}

interface setFillObjectsDeleteIds {
	type: CabinetObjectsActionTypes.SET_FILL_OBJECTS_DELETE_IDS
	payload: {
		[key: string]: {
			hotel_id: number,
			room_category_id: string
		}
	}
}

interface setObjectsIsSendDelete {
	type: CabinetObjectsActionTypes.SET_OBJECTS_IS_SEND_DELETE
	payload: boolean
}

export type CabinetObjectsActions = setCabinetObjectsIsLoadedObjects | setCabinetObjects | setCabinetObjectsFiltersStatus | setCabinetObjectsFiltersSearch | setObjectsDeleteIds | setFillObjectsDeleteIds | setObjectsIsSendDelete