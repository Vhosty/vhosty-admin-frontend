import React from "react";
import {useDispatch} from "react-redux";

import {setCabinetObjectsFiltersSearch} from "../../../../redux/actions/cabinet/cabinetObjects";

const CabinetObjectsFiltersSearch: React.FC = () => {
    const dispatch = useDispatch();

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCabinetObjectsFiltersSearch(e.target.value));
	};
	
    return (
        <div className="cabinet-block-objects-filters-block cabinet-block-objects-filters-block-search">
            <input
                type="text"
                className="cabinet-block-objects-filters-block-search__input"
                placeholder="Поиск по ключевым словам"
                onChange={onChangeSearch}
            />
        </div>
    );
};

export default CabinetObjectsFiltersSearch;
