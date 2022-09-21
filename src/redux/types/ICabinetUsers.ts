import { CabinetUser } from '../../models/ICabinetUsers'

export enum CabinetUsersTypeUser {
	USERS = "USERS",
	OBJECT_OWNERS = "OBJECT_OWNERS"
}

export interface CabinetUsersState {
	users: CabinetUser[],
	isLoaded: boolean

	type: CabinetUsersTypeUser

	isSendDelete: boolean,
	deleteIds: {
		[key: string]: number
	},
}

export enum CabinetUsersActionTypes {
	SET_CABINET_USERS = "SET_CABINET_USERS",
	SET_CABINET_USERS_IS_LOADED = "SET_CABINET_USERS_IS_LOADED",
	SET_CABINET_USERS_TYPE = "SET_CABINET_USERS_TYPE",

	SET_USERS_DELETE_IDS = "SET_USERS_DELETE_IDS",
	SET_FILL_USERS_DELETE_IDS = "SET_FILL_USERS_DELETE_IDS",
	SET_USERS_IS_SEND_DELETE = "SET_USERS_IS_SEND_DELETE"
}

interface setCabinetUsers {
	type: CabinetUsersActionTypes.SET_CABINET_USERS,
	payload: CabinetUser[]
}

interface setCabinetUsersIsLoaded {
	type: CabinetUsersActionTypes.SET_CABINET_USERS_IS_LOADED,
	payload: boolean
}

interface setCabinetUsersType {
	type: CabinetUsersActionTypes.SET_CABINET_USERS_TYPE,
	payload: CabinetUsersTypeUser
}

interface setUsersDeleteIds {
	type: CabinetUsersActionTypes.SET_USERS_DELETE_IDS
	payload: number
}

interface setFillUsersDeleteIds {
	type: CabinetUsersActionTypes.SET_FILL_USERS_DELETE_IDS
	payload: {
		[key: string]: number
	}
}

interface setUsersIsSendDelete {
	type: CabinetUsersActionTypes.SET_USERS_IS_SEND_DELETE
	payload: boolean
}

export type CabinetUsersActions = setCabinetUsers | setCabinetUsersIsLoaded | setCabinetUsersType | setUsersDeleteIds | setFillUsersDeleteIds | setUsersIsSendDelete