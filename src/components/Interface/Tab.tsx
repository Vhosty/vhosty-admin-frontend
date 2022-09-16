import React from "react";
import AnimateHeight from "react-animate-height";

interface TabProps {
    title: string;
    description: string;
}

const Tab: React.FC<TabProps> = ({title, description}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    return (
        <div className="tab">
            <h3
                className={`tab__title ${isVisible ? "visible" : ""}`}
                onClick={() => setIsVisible(!isVisible)}
            >
                {title}
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
            </h3>

            <AnimateHeight duration={300} height={isVisible ? "auto" : 0}>
                <p className="tab__description">{description}</p>
            </AnimateHeight>
        </div>
    );
};

export default Tab;
