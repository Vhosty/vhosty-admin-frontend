import React from "react";

import {Checkbox} from "../../";

const CabinetUsersItemTitles: React.FC = () => {
    return (
        <div className="cabinet-block-users-titles">
            <div className="cabinet-block-users-titles-checkbox">
                <Checkbox
                // onClick={setFillObjectsDeleteIdsOnClick}
                // checked={isAll}
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
