import React from "react";

import {CabinetObjectsFiltersStatus, CabinetObjectsFiltersSearch} from "../../../";

const CabinetObjectsFilters: React.FC = () => {
    return (
        <div className="cabinet-block-objects-filters">
			<CabinetObjectsFiltersStatus />
			
			<CabinetObjectsFiltersSearch />
        </div>
    );
};

export default CabinetObjectsFilters;
