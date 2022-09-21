import React from "react";

import {CabinetUser} from "../../../models/ICabinetUsers";

import {Checkbox} from "../../";
import moment from "moment";

interface CabinetUsersItemProps extends CabinetUser {
    isSelected: boolean;

    setUsersDeleteIdsOnClick: (id: number) => void;
}

const CabinetUsersItem: React.FC<CabinetUsersItemProps> = ({
    isSelected,
    id,
    created_at,
    full_name,
    email,
    phone,
    setUsersDeleteIdsOnClick,
}) => {
    return (
        <div
            className={`cabinet-block-users-item ${
                isSelected ? "selected" : ""
            }`}
        >
            <div className="cabinet-block-users-item-block-checkbox">
                <Checkbox
                    checked={isSelected}
                    onClick={() => setUsersDeleteIdsOnClick(id)}
                >
                    <></>
                </Checkbox>
            </div>

            <div className="cabinet-block-users-item-block-id">
                <p className="cabinet-block-users-item-block-id__title">{id}</p>
            </div>

            <div className="cabinet-block-users-item-block-date">
                <p className="cabinet-block-users-item-block-date__title">
                    {moment(created_at).format("DD.MM.YYYY")}
                    <span>{moment(created_at).format("hh:mm")}</span>
                </p>
            </div>

            <div className="cabinet-block-users-item-block-name">
                <p className="cabinet-block-users-item-block-name__title">
                    {full_name}
                </p>
            </div>

            <div className="cabinet-block-users-item-block-email">
                <p className="cabinet-block-users-item-block-email__title">
                    {email}
                </p>
            </div>

            <div className="cabinet-block-users-item-block-phone">
                <p className="cabinet-block-users-item-block-phone__title">
                    {phone}
                </p>
            </div>
        </div>
    );
};

export default CabinetUsersItem;
