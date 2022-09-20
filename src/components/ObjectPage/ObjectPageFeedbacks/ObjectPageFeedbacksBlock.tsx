import React from "react";

import {ObjectPageBlockTextWrapper} from "../../";

const ObjectPageFeedbacksBlock: React.FC = () => {
    return (
        <div className="object-page-section-feedbacks-block">
            <div className="object-page-section-feedbacks-block-info">
                <h4 className="object-page-section-feedbacks-block-info__name">
                    14BUL8014BU_
                </h4>
                <p className="object-page-section-feedbacks-block-info__type">
                    Стандартный двухместный номер
                </p>
                <p className="object-page-section-feedbacks-block-info__date">
                    12 мая 2022 года
                </p>
            </div>

            <div className="object-page-section-feedbacks-block-text">
                <div className="object-page-section-feedbacks-block-text-block">
                    <h4 className="object-page-section-feedbacks-block-text-block__title green">
                        Что было хорошо
                    </h4>
                    <p className="object-page-section-feedbacks-block-text-block__description">
                        Персонал, обслуживание, атмосфера
                    </p>
                </div>

                <div className="object-page-section-feedbacks-block-text-block">
                    <h4 className="object-page-section-feedbacks-block-text-block__title red">
                        Что было плохо
                    </h4>
                    <p className="object-page-section-feedbacks-block-text-block__description">
                        Персонал, обслуживание, атмосфера
                    </p>
                </div>

                <div className="object-page-section-feedbacks-block-text-block">
                    <ObjectPageBlockTextWrapper totalHeight={150}>
                        <h4 className="object-page-section-feedbacks-block-text-block__title">
                            Подробнее
                        </h4>
                        <p className="object-page-section-feedbacks-block-text-block__description">
                            В своём стремлении улучшить пользовательский опыт мы
                            упускаем, что сторонники тоталитаризма в науке могут
                            быть призваны к ответу. С учётом сложившейся
                            международной обстановки, сложившаяся структура
                            организации, в своём классическом представлении,
                            допускает внедрение направлений прогрессивного
                            развития! Ясность нашей позиции очевидна: постоянное
                            информационно-пропагандистское обеспечение нашей
                            деятельности способствует повышению качества
                            экспериментов, поражающих по своей масштабности и
                            грандиозности. Безусловно, постоянное
                            информационно-пропагандистское обеспечение нашей
                            деятельности требует от нас анализа поставленных
                            обществом задач.
                        </p>
                    </ObjectPageBlockTextWrapper>
                </div>
            </div>
        </div>
    );
};

export default ObjectPageFeedbacksBlock;
