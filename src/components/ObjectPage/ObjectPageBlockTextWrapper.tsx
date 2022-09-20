import React from "react";
import AnimateHeight from "react-animate-height";

interface ObjectPageBlockTextWrapper {
    children: React.ReactNode;

    totalHeight?: number;
    isFullHeight?: boolean;
}

const ObjectPageBlockTextWrapper: React.FC<ObjectPageBlockTextWrapper> = ({
    children,
    totalHeight,
    isFullHeight,
}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    return (
        <div className="object-page-section-text-wrapper">
            <div className="object-page-section-text">
                {isFullHeight ? (
                    children
                ) : (
                    <AnimateHeight
                        duration={300}
                        height={
                            isVisible ? "auto" : totalHeight ? totalHeight : 350
                        }
                    >
                        {children}

                        <div
                            className={`object-page-section-text-shadow ${
                                isVisible ? "hidden" : ""
                            }`}
                        ></div>
                    </AnimateHeight>
                )}
            </div>

            {isFullHeight ? null : (
                <button
                    className={`object-page-section-text__btn ${
                        isVisible ? "visible" : ""
                    }`}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? "Скрыть" : "Показать больше"}
                    <svg
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1L6.58579 6.58579C7.36684 7.36684 8.63316 7.36683 9.41421 6.58579L15 1"
                            stroke="#116E67"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ObjectPageBlockTextWrapper;
