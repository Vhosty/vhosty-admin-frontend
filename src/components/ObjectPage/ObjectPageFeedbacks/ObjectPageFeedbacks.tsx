import React from "react";

import {ObjectPageFeedbacksBlock} from "../../";

const ObjectPageFeedbacks: React.FC = () => {
    return (
        <div
            className="object-page-section object-page-section-feedbacks"
            id="object-page-feedbacks"
        >
            <div className="object-page-section-padding">
                <h2 className="object-page-section-feedbacks__title">
                    Отзывы об отеле
                </h2>
            </div>

            <div className="object-page-section-feedbacks-count">
                <h3 className="object-page-section-feedbacks-count__title">
                    5,7
                </h3>
                <div className="object-page-section-feedbacks-count-block">
                    <p className="object-page-section-feedbacks-count-block__title">
                        нормально
                    </p>
                    <p className="object-page-section-feedbacks-count-block__subtitle">
                        3 489 отзывов
                    </p>
                </div>
            </div>

            <div className="object-page-section-padding">
                <div className="object-page-section-feedbacks-charac">
                    <div className="object-page-section-feedbacks-charac-item">
                        <h4 className="object-page-section-feedbacks-charac-item__title">
                            Чистота
                        </h4>
                        <div className="object-page-section-feedbacks-charac-item-line">
                            <div
                                className="object-page-section-feedbacks-charac-item-line-active"
                                style={{width: "84%"}}
                            ></div>
                        </div>
                        <p
                            className="object-page-section-feedbacks-charac-item__count"
                            style={{marginLeft: "80%"}}
                        >
                            8,4
                        </p>
                    </div>
                    <div className="object-page-section-feedbacks-charac-item">
                        <h4 className="object-page-section-feedbacks-charac-item__title">
                            Номер
                        </h4>
                        <div className="object-page-section-feedbacks-charac-item-line">
                            <div
                                className="object-page-section-feedbacks-charac-item-line-active"
                                style={{width: "84%"}}
                            ></div>
                        </div>
                        <p
                            className="object-page-section-feedbacks-charac-item__count"
                            style={{marginLeft: "80%"}}
                        >
                            8,4
                        </p>
                    </div>
                    <div className="object-page-section-feedbacks-charac-item">
                        <h4 className="object-page-section-feedbacks-charac-item__title">
                            Расположение
                        </h4>
                        <div className="object-page-section-feedbacks-charac-item-line">
                            <div
                                className="object-page-section-feedbacks-charac-item-line-active"
                                style={{width: "84%"}}
                            ></div>
                        </div>
                        <p
                            className="object-page-section-feedbacks-charac-item__count"
                            style={{marginLeft: "80%"}}
                        >
                            8,4
                        </p>
                    </div>
                    <div className="object-page-section-feedbacks-charac-item">
                        <h4 className="object-page-section-feedbacks-charac-item__title">
                            Цена-качество
                        </h4>
                        <div className="object-page-section-feedbacks-charac-item-line">
                            <div
                                className="object-page-section-feedbacks-charac-item-line-active"
                                style={{width: "84%"}}
                            ></div>
                        </div>
                        <p
                            className="object-page-section-feedbacks-charac-item__count"
                            style={{marginLeft: "80%"}}
                        >
                            8,4
                        </p>
                    </div>
                    <div className="object-page-section-feedbacks-charac-item">
                        <h4 className="object-page-section-feedbacks-charac-item__title">
                            Обслуживание
                        </h4>
                        <div className="object-page-section-feedbacks-charac-item-line">
                            <div
                                className="object-page-section-feedbacks-charac-item-line-active"
                                style={{width: "84%"}}
                            ></div>
                        </div>
                        <p
                            className="object-page-section-feedbacks-charac-item__count"
                            style={{marginLeft: "80%"}}
                        >
                            8,4
                        </p>
                    </div>
                    <div className="object-page-section-feedbacks-charac-item">
                        <h4 className="object-page-section-feedbacks-charac-item__title">
                            Питание
                        </h4>
                        <div className="object-page-section-feedbacks-charac-item-line">
                            <div
                                className="object-page-section-feedbacks-charac-item-line-active"
                                style={{width: "84%"}}
                            ></div>
                        </div>
                        <p
                            className="object-page-section-feedbacks-charac-item__count"
                            style={{marginLeft: "80%"}}
                        >
                            8,4
                        </p>
                    </div>

                    <div className="object-page-section-feedbacks-block-wrapper">
                        <ObjectPageFeedbacksBlock />
                        <ObjectPageFeedbacksBlock />
                        <ObjectPageFeedbacksBlock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ObjectPageFeedbacks;
