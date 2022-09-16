import { Dispatch } from "redux"

import $api from "../../../http"

import { CabinetStatisticsPeriodState, CabinetStatisticsActionTypes } from "../../types/ICabinetStatistics"

export const fetchCabinetStatistics = (period: CabinetStatisticsPeriodState) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_OBJECTS,
			payload: false
		})

		dispatch({
			type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_USERS,
			payload: false
		})

		$api.get("/hotels/admin/statistic", { params: { period } }).then(({ data }) => {
			dispatch({
				type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_OBJECTS,
				payload: data
			})

			dispatch({
				type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_OBJECTS,
				payload: true
			})
		})

		$api.get("/users/admin/statistic", { params: { period } }).then(({ data }) => {
			dispatch({
				type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_USERS,
				payload: data
			})

			dispatch({
				type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_IS_LOADED_USERS,
				payload: true
			})
		})
	}
}

export const setCabinetStatisticsPeriod = (period: {
	title: string,
	key: CabinetStatisticsPeriodState
}) => ({
	type: CabinetStatisticsActionTypes.SET_CABINET_STATISTICS_PERIOD,
	payload: period
})