import React from "react";

const CabinetObjectsFiltersSearch: React.FC = () => {
	return (
        <div className="cabinet-block-objects-filters-block cabinet-block-objects-filters-block-search">
            <input
                type="text"
                className="cabinet-block-objects-filters-block-search__input"
                placeholder="Поиск по ключевым словам"
            />
        </div>
    );
};

export default CabinetObjectsFiltersSearch;
