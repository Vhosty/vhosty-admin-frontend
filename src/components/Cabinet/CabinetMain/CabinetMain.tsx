import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {CabinetMainPeriods, CabinetMainBlock, Loader} from "../../";

import {fetchCabinetStatistics} from "../../../redux/actions/cabinet/cabinetStatistics";

import {checkDeclension} from "../../../functions/checkDeclension";

import CabinetMainInfoImage from "../../../assets/images/cabinet-main-info.png";

const CabinetMain: React.FC = () => {
    const dispatch = useDispatch();

    const {period, users, objects, isLoadedObjects, isLoadedUsers} =
        useTypedSelector(({cabinetStatistics}) => cabinetStatistics);

    React.useEffect(() => {
        dispatch(fetchCabinetStatistics(period.key) as any);
    }, [period]);

    return (
        <div className="cabinet-block cabinet-block-main">
            <div className="cabinet-block-padding">
                <CabinetMainPeriods />

                <div className="cabinet-block-text">
                    <h2 className="cabinet-block-text__title">
                        {period.title}
                    </h2>

                    <p className="cabinet-block-text__subtitle">
                        Статистика по пользователям и отелям
                    </p>
                </div>

                {isLoadedObjects && isLoadedUsers ? (
                    <div className="cabinet-block-main-block-wrapper">
                        <CabinetMainBlock
                            count={checkDeclension(users.users_registered, [
                                "пользователь",
                                "пользователя",
                                "пользователей",
                            ])}
                            title="Зарегистрировано на сайте"
                            description="Такое количество пользователей присоединились к нам"
                            periodTitle={
                                period.title[0].toLowerCase() +
                                period.title.slice(1)
                            }
                        />

                        <CabinetMainBlock
                            count={checkDeclension(users.users_blocked, [
                                "пользователь",
                                "пользователя",
                                "пользователей",
                            ])}
                            title="Были заблокированы"
                            description="Вручную администратором сайта Bookover"
                            periodTitle={
                                period.title[0].toLowerCase() +
                                period.title.slice(1)
                            }
                        />

                        <CabinetMainBlock
                            count={checkDeclension(objects.objects_registered, [
                                "объявление",
                                "объявления",
                                "объявлений",
                            ])}
                            title="Были поданы на модерацию"
                            description="Столько объявлений получено для модерирования"
                            periodTitle={
                                period.title[0].toLowerCase() +
                                period.title.slice(1)
                            }
                        />

                        <CabinetMainBlock
                            count={checkDeclension(objects.objects_published, [
                                "объявление",
                                "объявления",
                                "объявлений",
                            ])}
                            title="В библиотеке Bookover"
                            description="Выводятся в каталоге поиска для пользователей сайта"
                            periodTitle={
                                period.title[0].toLowerCase() +
                                period.title.slice(1)
                            }
                        />

                        <CabinetMainBlock
                            count={checkDeclension(objects.objects_rejected, [
                                "объявление",
                                "объявления",
                                "объявлений",
                            ])}
                            title="Отправлены на доработку"
                            description="Столько объявлений были отправлены с комментарием администратора"
                            periodTitle={
                                period.title[0].toLowerCase() +
                                period.title.slice(1)
                            }
                        />

                        <CabinetMainBlock
                            count={checkDeclension(objects.objects_blocked, [
                                "объявление",
                                "объявления",
                                "объявлений",
                            ])}
                            title="Были заблокированы"
                            description="Вручную администратором сайта Bookover"
                            periodTitle={
                                period.title[0].toLowerCase() +
                                period.title.slice(1)
                            }
                        />
                    </div>
                ) : (
                    <Loader />
                )}

                <div className="cabinet-block-main-info">
                    <img
                        src={CabinetMainInfoImage}
                        alt=""
                        className="cabinet-block-main-info__image"
                    />
                    <div className="cabinet-block-main-info-text">
                        <h3 className="cabinet-block-main-info-text__title">
                            Нужно больше данных!
                        </h3>

                        <p className="cabinet-block-main-info-text__description">
                            Для более детальной статистики системе нужно больше
                            продуктивных дней. В дальнейшем, здесь появится
                            раздел “Статистика сравнений”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CabinetMain;
