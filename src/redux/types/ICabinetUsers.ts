import { CabinetUser } from '../../models/ICabinetUsers'

export enum CabinetUsersTypeUser {
	USERS = "USERS",
	OBJECT_OWNERS = "OBJECT_OWNERS"
}

export interface CabinetUsersState {
	users: CabinetUser[],
	isLoaded: boolean

	type: CabinetUsersTypeUser
}

export enum CabinetUsersActionTypes {
	SET_CABINET_USERS = "SET_CABINET_USERS",
	SET_CABINET_USERS_IS_LOADED = "SET_CABINET_USERS_IS_LOADED",
	SET_CABINET_USERS_TYPE = "SET_CABINET_USERS_TYPE"
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

export type CabinetUsersActions = setCabinetUsers | setCabinetUsersIsLoaded | setCabinetUsersType