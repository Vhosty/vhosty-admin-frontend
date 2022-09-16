import React from "react";
import {useDispatch} from "react-redux";

import {
    CabinetObjectsFilters,
    CabinetObjectsDeleteBtn,
    CabinetObjectsItemTitles,
    CabinetObjectsItem,
    Loader,
    CabinetNull,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    fetchCabinetObjects,
    setFillObjectsDeleteIds,
    setObjectsDeleteIds,
} from "../../../redux/actions/cabinet/cabinetObjects";

const CabinetObjects: React.FC = () => {
    const dispatch = useDispatch();

    const {objects, isLoadedObjects, deleteIds} = useTypedSelector(
        ({cabinetObjects}) => cabinetObjects
    );

    React.useEffect(() => {
        dispatch(fetchCabinetObjects() as any);
    }, []);

    const setObjectsDeleteIdsOnClick = (id: {
        hotel_id: number;
        room_category_id: string;
    }) => {
        dispatch(setObjectsDeleteIds(id));
    };

    const setFillObjectsDeleteIdsOnClick = () => {
        if (checkIsAll()) {
            dispatch(setFillObjectsDeleteIds({}));
        } else {
            const newObjects: {
                [key: string]: {
                    hotel_id: number;
                    room_category_id: string;
                };
            } = {};
            objects.map((object: any) => {
                newObjects[object.hotel.id] = {
                    hotel_id: object.hotel.id,
                    room_category_id: object.room_categories.id,
                };
            });
            dispatch(setFillObjectsDeleteIds(newObjects));
        }
    };

    const checkIsAll = () => {
        return objects.length === Object.keys(deleteIds).length;
    };

    return (
        <div className="cabinet-block cabinet-block-objects">
            <div className="cabinet-block-padding-top">
                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">
                        Библиотека объявлений
                    </h2>

                    <p className="cabinet-block-text__subtitle">
                        База зарегистрированных пользователей bookover.ru
                    </p>
                </div>

                <CabinetObjectsFilters />
            </div>

            {isLoadedObjects ? (
                <>
                    {objects.length ? (
                        <div className="cabinet-block-objects-items-wrapper">
                            <CabinetObjectsDeleteBtn />

                            <CabinetObjectsItemTitles
                                isAll={checkIsAll()}
                                setFillObjectsDeleteIdsOnClick={
                                    setFillObjectsDeleteIdsOnClick
                                }
                            />

                            {objects.map((object: any, index: any) => (
                                <CabinetObjectsItem
                                    {...object}
                                    isSelected={
                                        deleteIds[object.hotel.id]
                                            ? true
                                            : false
                                    }
                                    setObjectsDeleteIdsOnClick={
                                        setObjectsDeleteIdsOnClick
                                    }
                                    key={`"cabinet-block-objects-item-${index}`}
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

export default CabinetObjects;
