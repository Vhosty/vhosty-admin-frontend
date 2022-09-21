import React from "react";

import {Checkbox} from "../../";

interface CabinetUsersItemTitlesProps {
    isAll: boolean;
    setFillUsersDeleteIdsOnClick: () => void;
}

const CabinetUsersItemTitles: React.FC<CabinetUsersItemTitlesProps> = ({
    isAll,
    setFillUsersDeleteIdsOnClick,
}) => {
    return (
        <div className="cabinet-block-users-titles">
            <div className="cabinet-block-users-titles-checkbox">
                <Checkbox
                    checked={isAll}
                    onClick={setFillUsersDeleteIdsOnClick}
                >
                    <></>
                </Checkbox>
            </div>

            <p className="cabinet-block-users-titles__item id">ID</p>

            <p className="cabinet-block-users-titles__item date">
                Дата регистрации
            </p>

            <p className="cabinet-block-users-titles__item name">Имя Фамилия</p>

            <p className="cabinet-block-users-titles__item email">E-mail</p>

            <p className="cabinet-block-users-titles__item phone">
                Номер телефона
            </p>
        </div>
    );
};

export default CabinetUsersItemTitles;
