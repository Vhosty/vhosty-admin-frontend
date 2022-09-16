import React from "react";

import {Checkbox} from "../../";

interface CabinetObjectsItemTitlesProps {
    isAll: boolean;
    setFillObjectsDeleteIdsOnClick: () => void;
}

const CabinetObjectsItemTitles: React.FC<CabinetObjectsItemTitlesProps> = ({
    isAll,
    setFillObjectsDeleteIdsOnClick,
}) => {
    return (
        <div className="cabinet-block-objects-titles">
            <div className="cabinet-block-objects-titles-checkbox">
                <Checkbox
                    onClick={setFillObjectsDeleteIdsOnClick}
                    checked={isAll}
                >
                    <></>
                </Checkbox>
            </div>

            <p className="cabinet-block-objects-titles__item object">
                Объявление
            </p>

            <p className="cabinet-block-objects-titles__item status">Статус</p>

            <p className="cabinet-block-objects-titles__item reserv">
                Бронирование
            </p>

            <p className="cabinet-block-objects-titles__item price">
                Цена (Ночь)
            </p>

            <p className="cabinet-block-objects-titles__item date">
                Дата подачи
            </p>
        </div>
    );
};

export default CabinetObjectsItemTitles;
