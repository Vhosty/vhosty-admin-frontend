import React from "react";

interface TitleIconProps {
    title: string;
    marginBottom?: boolean;
    bold?: boolean;

    children: React.ReactNode;
}

const TitleIcon: React.FC<TitleIconProps> = ({
    title,
    marginBottom,
    children,
    bold,
}) => {
    return (
        <div className={`title-icon ${marginBottom ? "mb" : ""}`}>
            {children}

            <span className={`title-icon__title ${bold ? "bold" : ""}`}>
                {title}
            </span>
        </div>
    );
};

export default TitleIcon;
