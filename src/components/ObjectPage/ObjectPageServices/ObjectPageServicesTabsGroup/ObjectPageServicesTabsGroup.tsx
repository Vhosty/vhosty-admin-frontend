import React from "react";
import AnimateHeight from "react-animate-height";

import {ObjectPageServicesTabsGroupItem} from "../../../";

const ObjectPageServicesTabsGroup: React.FC<any> = ({
    group_name,
    services,
    index,
}) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    return (
        <div className="object-page-section-services-list-tab">
            <div
                className="object-page-section-services-list-tab-top"
                onClick={() => setIsActive(!isActive)}
            >
                <h3 className="object-page-section-services-list-tab-top__title">
                    {group_name}
                </h3>

                <div
                    className={`object-page-section-services-list-tab-top-icon ${
                        isActive ? "rotate" : ""
                    }`}
                >
                    <svg
                        width="21"
                        height="11"
                        viewBox="0 0 21 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L8.325 8.71053C9.50775 9.95553 11.4922 9.95553 12.675 8.71053L20 1"
                            stroke="#253021"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="object-page-section-services-list-tab-list">
                <AnimateHeight duration={300} height={isActive ? "auto" : 0}>
                    <ul className="object-page-section-services-list-tab-list-ul">
                        {services.map((service: any, subindex: number) =>
                            service.is_available || service.is_chargeable ? (
                                <ObjectPageServicesTabsGroupItem
                                    key={`object-page-section-services-list-${index}-ul__li-${subindex}`}
                                    {...service}
                                />
                            ) : null
                        )}
                    </ul>
                </AnimateHeight>
            </div>
        </div>
    );
};

export default ObjectPageServicesTabsGroup;
