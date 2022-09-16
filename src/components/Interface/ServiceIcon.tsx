import React from "react";

import {Popup} from "../";

interface ServiceIconProps {
    children: React.ReactNode;

    disabled?: boolean;
    green?: boolean;
    marginBottom?: boolean;

    questionMessage?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({
    children,
    disabled,
    green,
    marginBottom,
    questionMessage,
}) => {
    const [activeMessage, setActiveMessage] = React.useState<boolean>(false);

    const openMessage = () => {
        setActiveMessage(true);
    };

    return (
        <div
            className={`service-icon ${disabled ? "disabled" : ""} ${
                green ? "green" : ""
            } ${marginBottom ? "marginBottom" : ""}`}
        >
            <span className="service-icon__title">{children}</span>

            {questionMessage ? (
                <span
                    className="service-icon__messageIcon"
                    onClick={openMessage}
                >
                    <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.5 1C9.4233 1 7.39323 1.61581 5.66652 2.76957C3.9398 3.92332 2.59399 5.5632 1.79927 7.48182C1.00455 9.40045 0.796615 11.5116 1.20176 13.5484C1.6069 15.5852 2.60693 17.4562 4.07538 18.9246C5.54383 20.3931 7.41475 21.3931 9.45155 21.7982C11.4884 22.2034 13.5996 21.9954 15.5182 21.2007C17.4368 20.406 19.0767 19.0602 20.2304 17.3335C21.3842 15.6068 22 13.5767 22 11.5C22 8.71522 20.8938 6.04451 18.9246 4.07538C16.9555 2.10625 14.2848 1 11.5 1Z"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M8.15918 8.29607C8.15918 8.29607 8.20929 7.25204 9.32671 6.35298C9.98952 5.81903 10.7842 5.66451 11.5001 5.65377C12.1522 5.64542 12.7344 5.7534 13.0828 5.91926C13.6794 6.20323 14.841 6.89647 14.841 8.37065C14.841 9.92178 13.8268 10.6264 12.6712 11.4013C11.5156 12.1763 11.2018 13.0175 11.2018 13.8867"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                        />
                        <path
                            className="service-icon__messageIcon__fill"
                            d="M11.1422 18.1818C11.8011 18.1818 12.3353 17.6476 12.3353 16.9886C12.3353 16.3296 11.8011 15.7954 11.1422 15.7954C10.4832 15.7954 9.94897 16.3296 9.94897 16.9886C9.94897 17.6476 10.4832 18.1818 11.1422 18.1818Z"
                        />
                    </svg>

                    <Popup
                        wrapperActive={activeMessage}
                        setWrapperActive={setActiveMessage}
                    >
                        <span className="service-icon__messageText">
                            {questionMessage}
                        </span>
                    </Popup>
                </span>
            ) : null}
        </div>
    );
};

export default ServiceIcon;
