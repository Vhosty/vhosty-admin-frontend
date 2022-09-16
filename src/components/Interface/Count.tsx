import React from "react";

const Count: React.FC = () => {
    const [countState, setCountState] = React.useState<number>(1);

    const minusCountState = () => {
        if (countState > 1) {
            setCountState(countState - 1);
        }
    };

    const plusCountState = () => {
        setCountState(countState + 1);
    };

    return (
        <div className="count">
            <button
                className={`count__btn ${countState === 1 ? "disabled" : ""}`}
                onClick={minusCountState}
            >
                <svg
                    width="20"
                    height="4"
                    viewBox="0 0 20 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.4375 2H1.5625"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <p className="count__title">{countState}</p>
            <button className="count__btn" onClick={plusCountState}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.4375 10H1.5625M10 1.5625V18.4375V1.5625Z"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Count;
