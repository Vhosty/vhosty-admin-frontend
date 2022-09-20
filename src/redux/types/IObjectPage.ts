export interface ObjectPageState {
	itemById: any,
	isLoaded: boolean,

	itemByIdRooms: any,
	isLoadedRooms: boolean,

	itemRoomById: any,
	isLoadedRoomItemById: boolean,

	itemByIdServices: any,
	isLoadedServices: boolean,

	itemByIdTerms: any,
	isLoadedTerms: boolean,
}

export enum ObjectPageActionTypes {
	SET_OBJECT_PAGE_ITEM_BY_ID = "SET_OBJECT_PAGE_ITEM_BY_ID",
	SET_OBJECT_PAGE_IS_LOADED = "SET_OBJECT_PAGE_IS_LOADED",

	SET_OBJECT_PAGE_ROOM_ITEM_BY_ID = "SET_OBJECT_PAGE_ROOM_ITEM_BY_ID",
	SET_OBJECT_PAGE_ROOM_ITEM_BY_ID_IS_LOADED = "SET_OBJECT_PAGE_ROOM_ITEM_BY_ID_IS_LOADED",

	SET_OBJECT_PAGE_ITEM_BY_ID_ROOMS = "SET_OBJECT_PAGE_ITEM_BY_ID_ROOMS",
	SET_OBJECT_PAGE_IS_LOADED_ROOMS = "SET_OBJECT_PAGE_IS_LOADED_ROOMS",

	SET_OBJECT_PAGE_ITEM_BY_ID_SERVICES = "SET_OBJECT_PAGE_ITEM_BY_ID_SERVICES",
	SET_OBJECT_PAGE_IS_LOADED_SERVICES = "SET_OBJECT_PAGE_IS_LOADED_SERVICES",

	SET_OBJECT_PAGE_ITEM_BY_ID_TERMS = "SET_OBJECT_PAGE_ITEM_BY_ID_TERMS",
	SET_OBJECT_PAGE_IS_LOADED_TERMS = "SET_OBJECT_PAGE_IS_LOADED_TERMS",
}

interface setObjectPageItemById {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID;
	payload: any;
}

interface setObjectPageIsLoaded {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED;
	payload: boolean;
}

interface setObjectPageRoomItemById {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_ROOM_ITEM_BY_ID;
	payload: any;
}

interface setObjectPageRoomIsLoaded {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_ROOM_ITEM_BY_ID_IS_LOADED;
	payload: boolean;
}

interface setObjectPageItemByIdRooms {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_ROOMS;
	payload: any;
}

interface setObjectPageIsLoadedRooms {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_ROOMS;
	payload: boolean;
}

interface setObjectPageItemByIdServices {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_SERVICES;
	payload: any;
}

interface setObjectPageIsLoadedServices {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_SERVICES;
	payload: boolean;
}

interface setObjectPageItemByIdTerms {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_ITEM_BY_ID_TERMS;
	payload: any;
}

interface setObjectPageIsLoadedTerms {
	type: ObjectPageActionTypes.SET_OBJECT_PAGE_IS_LOADED_TERMS;
	payload: boolean;
}

export type ObjectPageActions = setObjectPageItemById | setObjectPageIsLoaded | setObjectPageItemByIdRooms | setObjectPageIsLoadedRooms | setObjectPageItemByIdServices | setObjectPageIsLoadedServices | setObjectPageItemByIdTerms | setObjectPageIsLoadedTerms | setObjectPageRoomItemById | setObjectPageRoomIsLoaded