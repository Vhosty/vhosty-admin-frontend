import { CabinetStatisticsObjects, CabinetStatisticsUsers } from '../../models/ICabinetStatistics'

export enum CabinetStatisticsPeriodState {
	TO_DAY = "today",
	LAST_WEEK = "last_week",
	LAST_MONTH = "last_month",
	ALL_TIME = "all_time"
}

export interface CabinetStatisticsState {
	period: {
		title: string,
		key: CabinetStatisticsPeriodState
	},

	objects: CabinetStatisticsObjects,
	isLoadedObjects: boolean,

	users: CabinetStatisticsUsers,
	isLoadedUsers: boolean,
}

export enum CabinetStatisticsActionTypes {
	SET_CABINET_STATISTICS_PERIOD = "SET_CABINET_STATISTICS_PERIOD",

	SET_CABINET_STATISTICS_OBJECTS = "SET_CABINET_STATISTICS_OBJECTS",
	SET_CABINET_STATISTICS_IS_LOADED_OBJECTS = "SET_CABINET_STATISTICS_IS_LOADED_OBJECTS",

	SET_CABINET_STATISTICS_USERS = "SET_CABINET_STATISTICS_USERS",
	SET_CABINET_STATISTICS_IS_LOADED_USERS = "SET_CABINET_STATISTICS_IS_LOADED_USERS"
}

interface setCabinetStatisticsPeriod {
	type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_PERIOD,
	payload: {
		title: string,
		key: CabinetStatisticsPeriodState
	}
}

interface setCabinetStatisticsObjects {
	type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_OBJECTS,
	payload: CabinetStatisticsObjects
}

interface setCabinetStatisticsIsLoadedObjects {
	type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_OBJECTS,
	payload: boolean
}

interface setCabinetStatisticsUsers {
	type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_USERS,
	payload: CabinetStatisticsUsers
}

interface setCabinetStatisticsIsLoadedUsers {
	type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_USERS,
	payload: boolean
}

export type CabinetStatisticsActions = setCabinetStatisticsPeriod | setCabinetStatisticsObjects | setCabinetStatisticsIsLoadedObjects | setCabinetStatisticsUsers | setCabinetStatisticsIsLoadedUsers