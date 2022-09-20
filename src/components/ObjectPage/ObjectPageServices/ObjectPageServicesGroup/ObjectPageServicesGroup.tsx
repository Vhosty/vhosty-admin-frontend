import React from "react";

import {ObjectPageServicesGroupItem} from "../../../";

const ObjectPageServicesGroup: React.FC<any> = ({
    group_name,
    services,
    index,
}) => {
    return (
        <div className="object-page-section-services-list">
            <h3 className="object-page-section-services-list__title">
                {group_name}
            </h3>

            <ul className="object-page-section-services-list-ul">
                {services.map((service: any, subindex: number) =>
                    service.is_available || service.is_chargeable ? (
                        <ObjectPageServicesGroupItem
                            key={`object-page-section-services-list-${index}-ul__li-${subindex}`}
                            {...service}
                        />
                    ) : null
                )}
            </ul>
        </div>
    );
};

export default ObjectPageServicesGroup;
