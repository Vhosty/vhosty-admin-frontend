import { Moment } from 'moment'

import { CabinetUser } from '../../models/ICabinetUsers'

export enum CabinetUsersTypeUser {
	USERS = "USERS",
	OBJECT_OWNERS = "OBJECT_OWNERS"
}

export interface CabinetUsersState {
	users: CabinetUser[],
	isLoaded: boolean

	type: CabinetUsersTypeUser

	filters: {
		date: {
			from: Moment,
			to: Moment
		},

		search: string
	},

	isSendDelete: boolean,
	deleteIds: {
		[key: string]: number
	},
}

export enum CabinetUsersActionTypes {
	SET_CABINET_USERS = "SET_CABINET_USERS",
	SET_CABINET_USERS_IS_LOADED = "SET_CABINET_USERS_IS_LOADED",

	SET_CABINET_USERS_TYPE = "SET_CABINET_USERS_TYPE",

	SET_CABINET_USERS_FILTERS_DATE = "SET_CABINET_USERS_FILTERS_DATE",
	SET_CABINET_USERS_FILTERS_SEARCH = "SET_CABINET_USERS_FILTERS_SEARCH",

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

interface setCabinetUsersFiltersDate {
	type: CabinetUsersActionTypes.SET_CABINET_USERS_FILTERS_DATE,
	payload: {
		from: Moment,
		to: Moment
	}
}

interface setCabinetUsersFiltersSearch {
	type: CabinetUsersActionTypes.SET_CABINET_USERS_FILTERS_SEARCH,
	payload: string
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

export type CabinetUsersActions = setCabinetUsers | setCabinetUsersIsLoaded | setCabinetUsersType | setCabinetUsersFiltersDate | setCabinetUsersFiltersSearch | setUsersDeleteIds | setFillUsersDeleteIds | setUsersIsSendDelete