import { CabinetStatisticsPeriodState, CabinetStatisticsState, CabinetStatisticsActionTypes, CabinetStatisticsActions } from '../../types/ICabinetStatistics'

const initialState: CabinetStatisticsState = {
	period: {
		title: "Сегодня",
		key: CabinetStatisticsPeriodState.TO_DAY
	},

	objects: {
		objects_registered: 0,
		objects_published: 0,
		objects_rejected: 0,
		objects_blocked: 0
	},
	isLoadedObjects: false,

	users: {
		users_blocked: 0,
		users_registered: 0
	},
	isLoadedUsers: false,
}

const cabinetStatistics = (state = initialState, action: CabinetStatisticsActions) => {
	if (action.type === CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_PERIOD) {
		return {
			...state,
			period: action.payload
		}
	}

	if (action.type === CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_OBJECTS) {
		return {
			...state,
			objects: action.payload
		}
	}

	if (action.type === CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_OBJECTS) {
		return {
			...state,
			isLoadedObjects: action.payload
		}
	}

	if (action.type === CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_USERS) {
		return {
			...state,
			users: action.payload
		}
	}

	if (action.type === CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_USERS) {
		return {
			...state,
			isLoadedUsers: action.payload
		}
	}

	return state
}

export default cabinetStatistics