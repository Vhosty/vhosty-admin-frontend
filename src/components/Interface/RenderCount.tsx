import React from "react";
import {useDispatch} from "react-redux";

import {WrappedFieldProps, change} from "redux-form";

interface RenderCountProps extends WrappedFieldProps {}

const RenderCount: React.FC<RenderCountProps> = ({input, meta: {form}}) => {
    const dispatch = useDispatch();

    const [countState, setCountState] = React.useState<number>(
        input.value ? input.value : 1
    );

    const minusCountState = () => {
        if (countState > 1) {
            setCountState(countState - 1);
        }
    };

    const plusCountState = () => {
        setCountState(countState + 1);
    };

    React.useEffect(() => {
        dispatch(change(form, input.name, countState));
    }, [countState]);
    return (
        <div className="count">
            <button
                type="button"
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

            <button
                type="button"
                className="count__btn"
                onClick={plusCountState}
            >
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

export default RenderCount;
