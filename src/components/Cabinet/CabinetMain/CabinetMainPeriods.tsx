import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {CabinetStatisticsPeriodState} from "../../../redux/types/ICabinetStatistics";

import {setCabinetStatisticsPeriod} from "../../../redux/actions/cabinet/cabinetStatistics";

const CabinetMainPeriods: React.FC = () => {
    const dispatch = useDispatch();

    const {period} = useTypedSelector(
        ({cabinetStatistics}) => cabinetStatistics
    );

    const periods: {
        title: string;
        key: CabinetStatisticsPeriodState;
    }[] = [
        {
            title: "Сегодня",
            key: CabinetStatisticsPeriodState.TO_DAY,
        },
        {
            title: "За последнюю неделю",
            key: CabinetStatisticsPeriodState.LAST_WEEK,
        },
        {
            title: "За последний месяц",
            key: CabinetStatisticsPeriodState.LAST_MONTH,
        },
        {
            title: "За все время",
            key: CabinetStatisticsPeriodState.ALL_TIME,
        },
    ];

    const setPeriodOnClick = (period: {
        title: string;
        key: CabinetStatisticsPeriodState;
    }) => {
        dispatch(setCabinetStatisticsPeriod(period) as any);
    };

    return (
        <div className="cabinet-block-main-periods">
            {periods.map((item, index) => (
                <button
                    className={`cabinet-block__btn ${
                        item.key === period.key ? "active" : ""
                    } cabinet-block-main-periods__btn`}
                    key={`cabinet-block-main-periods-${index}__btn`}
                    onClick={() => setPeriodOnClick(item)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default CabinetMainPeriods;
