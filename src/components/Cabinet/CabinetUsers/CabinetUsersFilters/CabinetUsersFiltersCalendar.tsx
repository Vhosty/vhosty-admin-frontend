import React from "react";
import {Moment} from "moment";
import {useDispatch} from "react-redux";

import {TitleIcon, Calendar} from "../../../";

import {setCabinetUsersFiltersDate} from "../../../../redux/actions/cabinet/cabinetUsers";

const CabinetUsersFiltersCalendar: React.FC = () => {
    const dispatch = useDispatch();

    const onChangeCalendar = (from: Moment, to: Moment) => {
        if (to.isAfter(from)) {
            dispatch(
                setCabinetUsersFiltersDate({
                    from,
                    to,
                })
            );
        }
    };

    return (
        <div className="cabinet-block-users-filters-block">
            <TitleIcon title="Дата" marginBottom>
                <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.5 3.99994C17.5 3.3369 17.2366 2.70102 16.7678 2.23218C16.2989 1.76333 15.663 1.49994 15 1.49994H14.375V0.892521C14.375 0.556193 14.1164 0.267521 13.7801 0.250724C13.6956 0.246653 13.6111 0.259781 13.5318 0.289312C13.4526 0.318844 13.3801 0.364165 13.3188 0.422529C13.2576 0.480893 13.2088 0.551085 13.1755 0.628851C13.1422 0.706617 13.125 0.790339 13.125 0.874943V1.49994H4.375V0.892521C4.375 0.556193 4.11641 0.267521 3.78008 0.250724C3.69557 0.246653 3.61112 0.259781 3.53184 0.289312C3.45255 0.318844 3.38009 0.364165 3.31884 0.422529C3.25759 0.480893 3.20883 0.551085 3.17551 0.628851C3.14219 0.706617 3.12501 0.790339 3.125 0.874943V1.49994H2.5C1.83696 1.49994 1.20107 1.76333 0.732233 2.23218C0.263392 2.70102 0 3.3369 0 3.99994V4.46869C0 4.51013 0.016462 4.54988 0.0457646 4.57918C0.0750672 4.60848 0.11481 4.62494 0.15625 4.62494H17.3438C17.3852 4.62494 17.4249 4.60848 17.4542 4.57918C17.4835 4.54988 17.5 4.51013 17.5 4.46869V3.99994ZM0 15.2499C0 15.913 0.263392 16.5489 0.732233 17.0177C1.20107 17.4866 1.83696 17.7499 2.5 17.7499H15C15.663 17.7499 16.2989 17.4866 16.7678 17.0177C17.2366 16.5489 17.5 15.913 17.5 15.2499V5.99213C17.5 5.96105 17.4877 5.93124 17.4657 5.90927C17.4437 5.88729 17.4139 5.87494 17.3828 5.87494H0.117188C0.0861074 5.87494 0.0563004 5.88729 0.0343235 5.90927C0.0123466 5.93124 0 5.96105 0 5.99213V15.2499ZM13.4375 7.12494C13.6229 7.12494 13.8042 7.17993 13.9583 7.28294C14.1125 7.38595 14.2327 7.53237 14.3036 7.70368C14.3746 7.87498 14.3932 8.06348 14.357 8.24534C14.3208 8.4272 14.2315 8.59424 14.1004 8.72536C13.9693 8.85647 13.8023 8.94576 13.6204 8.98193C13.4385 9.0181 13.25 8.99954 13.0787 8.92858C12.9074 8.85762 12.761 8.73746 12.658 8.58329C12.555 8.42912 12.5 8.24786 12.5 8.06244C12.5 7.8138 12.5988 7.57535 12.7746 7.39953C12.9504 7.22371 13.1889 7.12494 13.4375 7.12494ZM13.4375 10.2499C13.6229 10.2499 13.8042 10.3049 13.9583 10.4079C14.1125 10.511 14.2327 10.6574 14.3036 10.8287C14.3746 11 14.3932 11.1885 14.357 11.3703C14.3208 11.5522 14.2315 11.7192 14.1004 11.8504C13.9693 11.9815 13.8023 12.0708 13.6204 12.1069C13.4385 12.1431 13.25 12.1245 13.0787 12.0536C12.9074 11.9826 12.761 11.8625 12.658 11.7083C12.555 11.5541 12.5 11.3729 12.5 11.1874C12.5 10.9388 12.5988 10.7003 12.7746 10.5245C12.9504 10.3487 13.1889 10.2499 13.4375 10.2499ZM10.3125 7.12494C10.4979 7.12494 10.6792 7.17993 10.8333 7.28294C10.9875 7.38595 11.1077 7.53237 11.1786 7.70368C11.2496 7.87498 11.2682 8.06348 11.232 8.24534C11.1958 8.4272 11.1065 8.59424 10.9754 8.72536C10.8443 8.85647 10.6773 8.94576 10.4954 8.98193C10.3135 9.0181 10.125 8.99954 9.95373 8.92858C9.78243 8.85762 9.63601 8.73746 9.533 8.58329C9.42998 8.42912 9.375 8.24786 9.375 8.06244C9.375 7.8138 9.47377 7.57535 9.64959 7.39953C9.8254 7.22371 10.0639 7.12494 10.3125 7.12494ZM10.3125 10.2499C10.4979 10.2499 10.6792 10.3049 10.8333 10.4079C10.9875 10.511 11.1077 10.6574 11.1786 10.8287C11.2496 11 11.2682 11.1885 11.232 11.3703C11.1958 11.5522 11.1065 11.7192 10.9754 11.8504C10.8443 11.9815 10.6773 12.0708 10.4954 12.1069C10.3135 12.1431 10.125 12.1245 9.95373 12.0536C9.78243 11.9826 9.63601 11.8625 9.533 11.7083C9.42998 11.5541 9.375 11.3729 9.375 11.1874C9.375 10.9388 9.47377 10.7003 9.64959 10.5245C9.8254 10.3487 10.0639 10.2499 10.3125 10.2499ZM10.3125 13.3749C10.4979 13.3749 10.6792 13.4299 10.8333 13.5329C10.9875 13.636 11.1077 13.7824 11.1786 13.9537C11.2496 14.125 11.2682 14.3135 11.232 14.4953C11.1958 14.6772 11.1065 14.8442 10.9754 14.9754C10.8443 15.1065 10.6773 15.1958 10.4954 15.2319C10.3135 15.2681 10.125 15.2495 9.95373 15.1786C9.78243 15.1076 9.63601 14.9875 9.533 14.8333C9.42998 14.6791 9.375 14.4979 9.375 14.3124C9.375 14.0638 9.47377 13.8253 9.64959 13.6495C9.8254 13.4737 10.0639 13.3749 10.3125 13.3749ZM7.1875 10.2499C7.37292 10.2499 7.55418 10.3049 7.70835 10.4079C7.86252 10.511 7.98268 10.6574 8.05364 10.8287C8.12459 11 8.14316 11.1885 8.10699 11.3703C8.07081 11.5522 7.98152 11.7192 7.85041 11.8504C7.7193 11.9815 7.55225 12.0708 7.3704 12.1069C7.18854 12.1431 7.00004 12.1245 6.82873 12.0536C6.65743 11.9826 6.51101 11.8625 6.408 11.7083C6.30498 11.5541 6.25 11.3729 6.25 11.1874C6.25 10.9388 6.34877 10.7003 6.52459 10.5245C6.7004 10.3487 6.93886 10.2499 7.1875 10.2499ZM7.1875 13.3749C7.37292 13.3749 7.55418 13.4299 7.70835 13.5329C7.86252 13.636 7.98268 13.7824 8.05364 13.9537C8.12459 14.125 8.14316 14.3135 8.10699 14.4953C8.07081 14.6772 7.98152 14.8442 7.85041 14.9754C7.7193 15.1065 7.55225 15.1958 7.3704 15.2319C7.18854 15.2681 7.00004 15.2495 6.82873 15.1786C6.65743 15.1076 6.51101 14.9875 6.408 14.8333C6.30498 14.6791 6.25 14.4979 6.25 14.3124C6.25 14.0638 6.34877 13.8253 6.52459 13.6495C6.7004 13.4737 6.93886 13.3749 7.1875 13.3749ZM4.0625 10.2499C4.24792 10.2499 4.42918 10.3049 4.58335 10.4079C4.73752 10.511 4.85768 10.6574 4.92864 10.8287C4.99959 11 5.01816 11.1885 4.98199 11.3703C4.94581 11.5522 4.85652 11.7192 4.72541 11.8504C4.5943 11.9815 4.42725 12.0708 4.2454 12.1069C4.06354 12.1431 3.87504 12.1245 3.70373 12.0536C3.53243 11.9826 3.38601 11.8625 3.283 11.7083C3.17998 11.5541 3.125 11.3729 3.125 11.1874C3.125 10.9388 3.22377 10.7003 3.39959 10.5245C3.5754 10.3487 3.81386 10.2499 4.0625 10.2499ZM4.0625 13.3749C4.24792 13.3749 4.42918 13.4299 4.58335 13.5329C4.73752 13.636 4.85768 13.7824 4.92864 13.9537C4.99959 14.125 5.01816 14.3135 4.98199 14.4953C4.94581 14.6772 4.85652 14.8442 4.72541 14.9754C4.5943 15.1065 4.42725 15.1958 4.2454 15.2319C4.06354 15.2681 3.87504 15.2495 3.70373 15.1786C3.53243 15.1076 3.38601 14.9875 3.283 14.8333C3.17998 14.6791 3.125 14.4979 3.125 14.3124C3.125 14.0638 3.22377 13.8253 3.39959 13.6495C3.5754 13.4737 3.81386 13.3749 4.0625 13.3749Z"
                        fill="#00A0A0"
                    />
                </svg>
            </TitleIcon>

            <Calendar
                title1="С"
                title2="По"
                onChange={onChangeCalendar}
                isCheckedBefore
                isHiddenCount
            />
        </div>
    );
};

export default CabinetUsersFiltersCalendar;
