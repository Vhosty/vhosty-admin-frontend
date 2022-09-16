import React from "react";

interface CabinetMainBlockProps {
    count: {
        num: number;
        text: string;
    };
    title: string;
    description: string;
    periodTitle: string;
}

const CabinetMainBlock: React.FC<CabinetMainBlockProps> = ({
    count,
    title,
    description,
    periodTitle,
}) => {
    return (
        <div className="cabinet-block-main-block">
            <div className="cabinet-block-main-block-count">
                <h3 className="cabinet-block-main-block-count__title">
                    {count.num}
                </h3>
                <p className="cabinet-block-main-block-count__subtitle">
                    {count.text}
                </p>
            </div>

            <div className="cabinet-block-main-block-line"></div>

            <div className="cabinet-block-main-block-text">
                <h3 className="cabinet-block-main-block-text__title">
                    {title}
                </h3>
                <p className="cabinet-block-main-block-text__description">
                    {description}&nbsp;<span>{periodTitle}</span>
                </p>
            </div>
        </div>
    );
};

export default CabinetMainBlock;
