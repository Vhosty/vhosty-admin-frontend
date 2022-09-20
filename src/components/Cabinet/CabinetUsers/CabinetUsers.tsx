import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import { fetchCabinetUsers } from "../../../redux/actions/cabinet/cabinetUsers";

import {CabinetUser} from "../../../models/ICabinetUsers";

import {
    CabinetUsersTypeBtns,
    CabinetUsersFilters,
    CabinetUsersDeleteBtn,
    CabinetUsersItemTitles,
    CabinetUsersItem,
    CabinetNull,
    Loader,
} from "../../";

const CabinetUsers: React.FC = () => {
    const dispatch = useDispatch();

    const {type, isLoaded, users} = useTypedSelector(
        ({cabinetUsers}) => cabinetUsers
    );

    React.useEffect(() => {
        dispatch(fetchCabinetUsers(type) as any);
    }, [type]);

    return (
        <div className="cabinet-block cabinet-block-users">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">
                        Пользователи сайта
                    </h2>

                    <p className="cabinet-block-text__subtitle">
                        База зарегистрированных пользователей bookover.ru
                    </p>
                </div>

                <CabinetUsersTypeBtns />

                <CabinetUsersFilters />
            </div>

            {isLoaded ? (
                <>
                    {users.length ? (
                        <div className="cabinet-block-users-items-wrapper">
                            <CabinetUsersDeleteBtn />

                            <CabinetUsersItemTitles
                            // isAll={checkIsAll()}
                            // setFillObjectsDeleteIdsOnClick={
                            // setFillObjectsDeleteIdsOnClick
                            // }
                            />

                            {users.map((user: CabinetUser, index: any) => (
                                <CabinetUsersItem
                                    {...user}
                                    isSelected={false}
                                    // isSelected={
                                    //     deleteIds[object.hotel.id]
                                    //         ? true
                                    //         : false
                                    // }
                                    // setObjectsDeleteIdsOnClick={
                                    //     setObjectsDeleteIdsOnClick
                                    // }
                                    key={`"cabinet-block-users-item-${index}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <CabinetNull title="Нет объектов" />
                    )}
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default CabinetUsers;
