import React from "react";
import {useDispatch} from "react-redux";

import {setCabinetUsersFiltersSearch} from "../../../../redux/actions/cabinet/cabinetUsers";

const CabinetUsersFiltersSearch: React.FC = () => {
    const dispatch = useDispatch();

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCabinetUsersFiltersSearch(e.target.value));
    };

    return (
        <div className="cabinet-block-users-filters-block cabinet-block-users-filters-block-search">
            <input
                type="text"
                className="cabinet-block-users-filters-block-search__input"
                placeholder="Поиск по ключевым словам"
                onChange={onChangeSearch}
            />
        </div>
    );
};

export default CabinetUsersFiltersSearch;
