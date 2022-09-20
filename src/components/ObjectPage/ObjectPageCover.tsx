import React from "react";

import {Stars, Location} from "../";

const ObjectPageCover: React.FC<any> = ({background_images, name, stars}) => {
    return (
        <>
            <div
                className="object-page-cover"
                style={{
                    backgroundImage: `url('${background_images[0] && background_images[0].url}')`,
                }}
            >
                <div className="object-page-cover-plaecholder"></div>

                <div className="object-page-cover-wrapper">
                    <div className="object-page-cover-block">
                        <div className="object-page-cover-text">
                            <div className="object-page-cover-text-info">
                                <div className="object-page-cover-text-info-stars">
                                    <Stars count={stars} />
                                </div>
                                <h2 className="object-page-cover-text-info__title">
                                    {name}
                                </h2>

                                <Location
                                    title="Дубай Медиа-Сити, Дубай, st. general city employment, 1440"
                                    subtitle="10,9 км от центра"
                                />
                            </div>

                            <div className="object-page-cover-text-feedbacks">
                                <h3 className="object-page-cover-text-feedbacks__count">
                                    5,7
                                </h3>
                                <p className="object-page-cover-text-feedbacks__title">
                                    нормально
                                </p>
                                <p className="object-page-cover-text-feedbacks__subtitle">
                                    3 485 отзывов
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="object-page-cover-block">
                            <div className="object-page-cover-dots">
                                {background_images.map((_: any, index: number) => (
                                    <div
                                        className={`object-page-cover-dots-item ${
                                            index === 1 ? "active" : ""
                                        }`}
                                        key={`object-page-cover-dots-item-${index}`}
                                    ></div>
                                ))}
                            </div>
                        </div> */}
                </div>
            </div>
        </>
    );
};

export default ObjectPageCover;
