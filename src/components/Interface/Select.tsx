import React from "react";
import {v4} from "uuid";
import AnimateHeight from "react-animate-height";

interface SelectProps {
    choices: {key: string; title: string}[];

    title?: string;

    border?: boolean;
    small?: boolean;

    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
    choices,
    border,
    small,
    title,
    disabled,
}) => {
    const id = v4();

    const [isOpen, setIsOpen] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const SelectRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggleSelect);
        document.addEventListener("touchstart", toggleSelect);

        return () => {
            document.removeEventListener("mousedown", toggleSelect);
            document.removeEventListener("touchstart", toggleSelect);
        };
    }, [SelectRef]);

    const toggleSelect = (e: any) => {
        if (SelectRef.current && !SelectRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <div className="select-wrapper-wrapper">
            {title ? <p className="select__title">{title}</p> : null}

            <div
                className={`select-wrapper ${disabled ? "disabled" : ""} ${
                    small ? "small" : ""
                }`}
            >
                <div
                    className={`select ${isOpen ? "active" : ""} ${
                        border ? "border" : ""
                    } ${small ? "small" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    ref={SelectRef}
                >
                    <div className={`select-title ${isOpen ? "active" : ""}`}>
                        <p className="select-title__title">
                            {choices[currentIndex].title}
                        </p>

                        <div
                            className={`select-title-icon ${
                                isOpen ? "rotate" : ""
                            }`}
                        >
                            <svg
                                width="21"
                                height="11"
                                viewBox="0 0 21 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L8.325 8.71053C9.50775 9.95553 11.4922 9.95553 12.675 8.71053L20 1"
                                    stroke="#253021"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <AnimateHeight duration={300} height={isOpen ? "auto" : 0}>
                        <div className="select-list">
                            {choices.map((item, index) => (
                                <p
                                    className={`select-list__item ${
                                        currentIndex === index ? "active" : ""
                                    }`}
                                    key={`${id}-select-list__item-${index}`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    {item.title}
                                </p>
                            ))}
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        </div>
    );
};

export default Select;
