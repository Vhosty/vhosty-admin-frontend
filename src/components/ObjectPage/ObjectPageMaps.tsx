import React from "react";


const ObjectPageMaps: React.FC = () => {
    return (
        <div
            className="object-page-section object-page-section-maps"
            id="object-page-maps"
        >
            <div className="object-page-section-padding">
                <div className="object-page-section-maps-text">
                    <h2 className="object-page-section__title">
                        Отель на карте и ориентиры
                    </h2>
                    <div className="object-page-section-maps-text-location">
                        <p className="object-page-section-maps-text-location__title">
                            Дубай Медиа-Сити, Дубай, st. general city
                            employment, 1440
                        </p>
                        <p className="object-page-section-maps-text-location__subtitle">
                            10,9 км от центра
                        </p>
                    </div>
                    <div className="object-page-section-maps-text-list-wrapper">
                        <div className="object-page-section-maps-text-list">
                            <h3 className="object-page-section-maps-text-list__title">
                                Достопримечательности
                            </h3>
                            <div className="object-page-section-maps-text-list-item">
                                <p className="object-page-section-maps-text-list-item__title">
                                    Отель Burj Al Arab
                                </p>
                                <p className="object-page-section-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                            <div className="object-page-section-maps-text-list-item">
                                <p className="object-page-section-maps-text-list-item__title">
                                    Гольф-поле Montgomerie в Дубае
                                </p>
                                <p className="object-page-section-maps-text-list-item__distance">
                                    25,9 км
                                </p>
                            </div>
                            <div className="object-page-section-maps-text-list-item">
                                <p className="object-page-section-maps-text-list-item__title">
                                    Аквапарк Aquaventure
                                </p>
                                <p className="object-page-section-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                            <div className="object-page-section-maps-text-list-item">
                                <p className="object-page-section-maps-text-list-item__title">
                                    Dubai Autodrome
                                </p>
                                <p className="object-page-section-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                        </div>

                        <div className="object-page-section-maps-text-list">
                            <h3 className="object-page-section-maps-text-list__title">
                                Инфраструктура
                            </h3>
                            <div className="object-page-section-maps-text-list-item">
                                <p className="object-page-section-maps-text-list-item__title">
                                    Отель Burj Al Arab
                                </p>
                                <p className="object-page-section-maps-text-list-item__distance">
                                    5,9 км
                                </p>
                            </div>
                            <div className="object-page-section-maps-text-list-item">
                                <p className="object-page-section-maps-text-list-item__title">
                                    Гольф-поле Montgomerie в Дубае
                                </p>
                                <p className="object-page-section-maps-text-list-item__distance">
                                    25,9 км
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="object-page-section-maps-text__warning">
                        * Все расстояния измерены по прямой. Фактическая
                        дистанция может отличаться.
                    </p>
                </div>
            </div>

            <div
                className="object-page-section-maps-map"
                // style={{backgroundImage: `url('${MapImage}')`}}
            >
                <button className="btn object-page-section-maps-map__btn">
                    Метки и отель на карте
                </button>
            </div>
        </div>
    );
};

export default ObjectPageMaps;
