import { ObjectPageState, ObjectPageActionTypes, ObjectPageActions } from "../types/IObjectPage";

const initialState: ObjectPageState = {
	itemById: {},
	isLoaded: false,

	itemRoomById: {},
	isLoadedRoomItemById: false,

	itemByIdRooms: [],
	isLoadedRooms: false,

	itemByIdServices: [],
	isLoadedServices: false,

	itemByIdTerms: {},
	isLoadedTerms: false,
};

const object_page = (state = initialState, action: ObjectPageActions) => {
	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID) {
		return {
			...state,
			itemById: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED) {
		return {
			...state,
			isLoaded: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_ROOM_ITEM_BY_ID) {
		return {
			...state,
			itemRoomById: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_ROOM_ITEM_BY_ID_IS_LOADED) {
		return {
			...state,
			isLoadedRoomItemById: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_ROOMS) {
		return {
			...state,
			itemByIdRooms: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_ROOMS) {
		return {
			...state,
			isLoadedRooms: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_SERVICES) {
		return {
			...state,
			itemByIdServices: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_SERVICES) {
		return {
			...state,
			isLoadedServices: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_TERMS) {
		return {
			...state,
			itemByIdTerms: action.payload,
		};
	}

	if (action.type === ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_TERMS) {
		return {
			...state,
			isLoadedTerms: action.payload,
		};
	}

	return state;
};

export default object_page;
