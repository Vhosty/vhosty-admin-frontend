import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {CabinetUsersTypeUser} from "../../../redux/types/ICabinetUsers";

import {setCabinetUsersTypeUser} from "../../../redux/actions/cabinet/cabinetUsers";

const CabinetUsersTypeBtns: React.FC = () => {
    const dispatch = useDispatch();

    const {type} = useTypedSelector(({cabinetUsers}) => cabinetUsers);

    const types: {
        title: string;
        key: CabinetUsersTypeUser;
    }[] = [
        {
            title: "Пользователи",
            key: CabinetUsersTypeUser.USERS,
        },
        {
            title: "Владельцы объектов",
            key: CabinetUsersTypeUser.OBJECT_OWNERS,
        },
    ];

    const setTypeOnClick = (type: CabinetUsersTypeUser) => {
        dispatch(setCabinetUsersTypeUser(type) as any);
    };

    return (
        <div className="cabinet-block-users-types-btns">
            {types.map((item, index) => (
                <button
                    className={`cabinet-block__btn ${
                        item.key === type ? "active" : ""
                    } cabinet-block-users-types-btns__btn`}
                    key={`cabinet-block-users-types-btns-${index}__btn`}
                    onClick={() => setTypeOnClick(item.key)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default CabinetUsersTypeBtns;
