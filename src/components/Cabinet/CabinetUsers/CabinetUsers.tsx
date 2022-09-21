import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    fetchCabinetUsers,
    setUsersDeleteIds,
    setFillUsersDeleteIds,
} from "../../../redux/actions/cabinet/cabinetUsers";

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

    const {type, isLoaded, users, deleteIds} = useTypedSelector(
        ({cabinetUsers}) => cabinetUsers
    );

    React.useEffect(() => {
        dispatch(fetchCabinetUsers(type) as any);
    }, [type]);

    const setUsersDeleteIdsOnClick = (id: number) => {
        dispatch(setUsersDeleteIds(id));
    };

    const setFillUsersDeleteIdsOnClick = () => {
        if (checkIsAll()) {
            dispatch(setFillUsersDeleteIds({}));
        } else {
            const newUsers: {
                [key: string]: number;
            } = {};
            users.map((user: CabinetUser) => {
                newUsers[user.id] = user.id;
            });
            dispatch(setFillUsersDeleteIds(newUsers));
        }
    };

    const checkIsAll = () => {
        return users.length === Object.keys(deleteIds).length;
    };

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
                                isAll={checkIsAll()}
                                setFillUsersDeleteIdsOnClick={
                                    setFillUsersDeleteIdsOnClick
                                }
                            />

                            {users.map((user: CabinetUser, index: any) => (
                                <CabinetUsersItem
                                    {...user}
                                    isSelected={
                                        deleteIds[user.id] ? true : false
                                    }
                                    setUsersDeleteIdsOnClick={
                                        setUsersDeleteIdsOnClick
                                    }
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
