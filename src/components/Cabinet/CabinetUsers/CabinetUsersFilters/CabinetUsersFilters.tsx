import React from "react";

import {
    CabinetUsersFiltersCalendar,
    CabinetUsersFiltersSearch,
} from "../../../";

const CabinetUsersFilters: React.FC = () => {
    return (
        <div className="cabinet-block-users-filters">
			<CabinetUsersFiltersCalendar />
			
			<CabinetUsersFiltersSearch />
        </div>
    );
};

export default CabinetUsersFilters;
