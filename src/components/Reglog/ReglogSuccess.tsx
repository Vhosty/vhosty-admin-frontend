import React from "react";
import {Link} from "react-router-dom";

interface ReglogSuccessProps {
    topTitle: string;

    title: string;
    description: string;
    btnLink: string;
    btnText: string;
}

const ReglogSuccess: React.FC<ReglogSuccessProps> = ({
    topTitle,
    title,
    description,
    btnLink,
    btnText,
}) => {
    return (
        <div className="reglog-content-padding">
            <div className="reglog-success">
                <div className="reglog-success-bg">
                    <svg
                        width="426"
                        height="464"
                        viewBox="0 0 426 464"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M183.719 -10C50.4364 -10 -58 98.4364 -58 231.719C-58 365.001 50.4364 473.438 183.719 473.438C317.001 473.438 425.438 365.001 425.438 231.719C425.438 98.4364 317.001 -10 183.719 -10ZM309.517 150.708L153.33 336.646C151.616 338.686 149.484 340.335 147.078 341.48C144.672 342.625 142.048 343.239 139.384 343.281H139.071C136.464 343.28 133.887 342.732 131.507 341.67C129.127 340.609 126.996 339.06 125.253 337.122L58.3155 262.747C56.6156 260.944 55.2931 258.819 54.426 256.498C53.5589 254.176 53.1646 251.705 53.2662 249.229C53.3679 246.753 53.9634 244.322 55.0179 242.08C56.0723 239.837 57.5644 237.828 59.4064 236.171C61.2484 234.513 63.4032 233.24 65.7442 232.427C68.0851 231.614 70.5649 231.277 73.0379 231.436C75.5109 231.595 77.9271 232.247 80.1446 233.353C82.362 234.46 84.336 235.998 85.9505 237.878L138.582 296.355L281.045 126.792C284.241 123.097 288.762 120.809 293.632 120.421C298.501 120.033 303.328 121.576 307.068 124.718C310.808 127.86 313.162 132.348 313.62 137.211C314.079 142.074 312.605 146.923 309.517 150.708Z"
                            fill="#76DD87"
                            fillOpacity="0.2"
                        />
                    </svg>
                </div>

                <div className="reglog-success-title">
                    <p className="reglog-success-title__subtitle">
                        Гость №{localStorage.getItem("userNumber")}
                    </p>
                    <p className="reglog-success-title__title">{topTitle}</p>
                </div>
                <div className="reglog-success-text">
                    <h2 className="reglog-success-text__title">{title}</h2>
                    <p className="reglog-success-text__description">
                        {description}
                    </p>
                    <Link to={btnLink} className="btn reglog-success-text__btn">
                        {btnText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReglogSuccess;
