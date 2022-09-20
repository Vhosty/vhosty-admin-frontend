import React from "react";

const ObjectPageServicesGroupItem: React.FC<any> = ({name, is_chargeable}) => {
    return (
        <li className="object-page-section-services-list-ul__li">
            {name}&nbsp;
            {is_chargeable ? <span>(платно)</span> : null}
        </li>
    );
};

export default ObjectPageServicesGroupItem;
