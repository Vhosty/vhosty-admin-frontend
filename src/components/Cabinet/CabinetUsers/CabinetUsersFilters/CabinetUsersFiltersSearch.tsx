import React from "react";

const CabinetUsersFiltersSearch: React.FC = () => {
    return (
        <div className="cabinet-block-users-filters-block cabinet-block-users-filters-block-search">
            <input
                type="text"
                className="cabinet-block-users-filters-block-search__input"
                placeholder="Поиск по ключевым словам"
            />
        </div>
    );
};

export default CabinetUsersFiltersSearch;
