import React from "react";
import moment, {Moment} from "moment";

import {CalendarFrom, CalendarTo} from "./Calendar";

const totalDays = 35;

interface CalendarSelectProps {
    date: Moment;
    from: CalendarFrom;
    to: CalendarTo;

    daysMonth: Moment[];

    isCheckedBefore?: boolean;

    setDaysMonth: (days: Moment[]) => void;
    setDate: (date: Moment) => void;
    setFrom: (from: CalendarFrom) => void;
    setTo: (to: CalendarTo) => void;
}

const CalendarSelect: React.FC<CalendarSelectProps> = ({
    date,
    from,
    to,
    daysMonth,
    isCheckedBefore,
    setDaysMonth,
    setDate,
    setFrom,
    setTo,
}) => {
    React.useEffect(() => {
        const startDay = date.clone().startOf("month").startOf("week");
        const day = startDay.clone().subtract(1, "day");

        setDaysMonth(
            [...Array(totalDays)].map(() => day.add(1, "day").clone())
        );
    }, [date]);

    const isSelectedMonth = (day: Moment) => date.isSame(day, "month");

    const isSelectedDay = (day: Moment) =>
        (from.date.isSame(day, "day") || to.date.isSame(day, "day")) &&
        from.selected;

    const addMonthOnClick = () => {
        if (moment(date).isBefore(moment().add(1, "years"))) {
            setDate(moment(date).add(1, "month"));
            setDaysMonth([]);
        }
    };

    const minusMonthOnClick = () => {
        if (moment(date).isAfter(moment()) || isCheckedBefore) {
            setDate(moment(date).subtract(1, "month"));
            setDaysMonth([]);
        }
    };

    const setFiltersCalendarDateOnClick = (day: Moment) => {
        if (from.active && from.date.isBefore(day)) {
            setFrom({...from, active: false});
            setTo({...to, date: day});
        } else {
            setFrom({...from, date: day, active: true, selected: true});
            setTo({...to, date: day});
        }
    };

    return (
        <>
            <div className="calendar-select-top">
                <div
                    className={`calendar-select-top-arrow-btn prev ${
                        moment(date).format("MMMM") ===
                            moment().format("MMMM") &&
                        moment(date).format("YYYY") ===
                            moment().format("YYYY") &&
                        !isCheckedBefore
                            ? "disabled"
                            : ""
                    }`}
                    onClick={minusMonthOnClick}
                >
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 1L2.41421 6.58579C1.63316 7.36684 1.63316 8.63316 2.41421 9.41421L8 15"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <p className="calendar-select-top__title">
                    {date.format("MMMM YYYY")}
                </p>

                <div
                    className={`calendar-select-top-arrow-btn next  ${
                        moment(date).format("MM") === moment().format("MM") &&
                        parseInt(moment(date).format("YYYY")) ===
                            parseInt(moment().format("YYYY")) + 1
                            ? "disabled"
                            : ""
                    }`}
                    onClick={addMonthOnClick}
                >
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 15L6.58579 9.41421C7.36684 8.63316 7.36684 7.36684 6.58579 6.58579L1 1"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="calendar-select-days-title">
                <span className="calendar-select-days-title__title">пн</span>
                <span className="calendar-select-days-title__title">вт</span>
                <span className="calendar-select-days-title__title">ср</span>
                <span className="calendar-select-days-title__title">чт</span>
                <span className="calendar-select-days-title__title">пт</span>
                <span className="calendar-select-days-title__title">сб</span>
                <span className="calendar-select-days-title__title">вс</span>
            </div>

            {daysMonth.length ? (
                <div className="calendar-select-days">
                    {daysMonth.map((day, index) =>
                        isSelectedMonth(day) ? (
                            <span
                                className={`calendar-select-days__day ${
                                    day.isAfter(from.date) &&
                                    day.isBefore(to.date)
                                        ? "included"
                                        : ""
                                } ${isSelectedDay(day) ? "active" : ""} ${
                                    day.isBefore(
                                        moment().subtract(1, "days")
                                    ) && !isCheckedBefore
                                        ? "disabled"
                                        : ""
                                }`}
                                key={`calendar-select-days-${index}__day`}
                                onClick={() =>
                                    setFiltersCalendarDateOnClick(day)
                                }
                            >
                                {day.format("D")}
                            </span>
                        ) : (
                            <span
                                className={`calendar-select-days__day disabled`}
                                key={`calendar-select-days-${index}__day`}
                            ></span>
                        )
                    )}
                </div>
            ) : null}
        </>
    );
};

export default CalendarSelect;
