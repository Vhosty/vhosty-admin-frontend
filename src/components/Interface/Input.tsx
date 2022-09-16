import React from "react";

interface InputProps {
    label: string;
    type: string;

    title?: string;
    fixLabel?: string;

    small?: boolean;
    smallPlaceholder?: boolean;

    value?: string | number;
    defaultValue?: string | number;

    disabled?: boolean;

    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    fixLabel,
    small,
    smallPlaceholder,
    title,
    value,
    defaultValue,
    disabled,
    onChange,
}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const onClickVisible = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="input">
            <div className="input-title">
                {title ? <p className="input-title__title">{title}</p> : null}
            </div>

            <div
                className={`input-field ${small ? "small" : ""} ${
                    smallPlaceholder ? "small-placeholder" : ""
                }`}
            >
                <input
                    type={
                        type === "password"
                            ? isVisible
                                ? "text"
                                : "password"
                            : type
                    }
                    className={`input-field__input ${
                        disabled ? "disabled" : ""
                    }`}
                    placeholder={label}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange && onChange(e.target.value)
                    }
                />

                {type === "password" && false ? (
                    <div className="input-field-icon" onClick={onClickVisible}>
                        {isVisible ? (
                            <svg
                                width="25"
                                height="17"
                                viewBox="0 0 25 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.4992 0C3.30061 0 0 8.55556 0 8.55556C0 8.55556 3.30061 17 12.4992 17C21.6979 17 25 8.55556 25 8.55556C25 8.55556 21.6979 0 12.4992 0ZM12.4992 14.3333C7.17479 14.3333 1.96207 10.5207 0 8.55556C1.40437 7.14907 5.04932 4.77796 8.27938 3.72537C7.51872 4.63266 7.10206 5.76129 7.09782 6.92593C7.09782 8.30112 7.66689 9.62 8.67986 10.5924C9.69282 11.5648 11.0667 12.1111 12.4992 12.1111C13.9318 12.1111 15.3057 11.5648 16.3186 10.5924C17.3316 9.62 17.9007 8.30112 17.9007 6.92593C17.8964 5.76129 17.4798 4.63266 16.7191 3.72537C19.9505 4.77796 23.5983 7.15037 25 8.55556C23.0352 10.5233 17.8224 14.3333 12.4992 14.3333Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.163006 11.4865C0.163006 11.4865 2.28108 3.37838 11.4865 3.37838C12.7662 3.37838 13.9716 3.54189 15.1054 3.81351L6.56757 12.3514C6.24886 11.6559 6.08297 10.9002 6.08108 10.1351C6.08108 8.86892 6.53378 7.72027 7.26351 6.79865C4.03108 7.89595 1.56841 10.0216 0.163006 11.4865C1.36022 12.7356 2.71427 13.8247 4.19054 14.727L3.37838 16.8919C0.675676 13.5135 0.163006 11.4865 0.163006 11.4865ZM22.973 11.4865C22.973 11.4865 20.6919 19.5946 11.4865 19.5946C10.2081 19.5946 9.00541 19.427 7.87027 19.1581L2.02703 25L0 22.973L22.973 0L25 2.02703L20.2703 6.75676C22.4959 9.93649 22.973 11.4865 22.973 11.4865ZM22.8176 11.4946C21.6182 10.2421 20.2614 9.15053 18.7811 8.2473L16.8919 10.1351C16.8919 11.5687 16.3224 12.9436 15.3087 13.9573C14.295 14.971 12.9201 15.5405 11.4865 15.5405L10.2068 16.8203C10.6257 16.8622 11.05 16.8919 11.4865 16.8919C16.8622 16.8919 20.8689 13.5432 22.8176 11.4946Z"
                                    fill="#00A0A0"
                                />
                            </svg>
                        )}
                    </div>
                ) : null}

                {fixLabel ? (
                    <p
                        className={`input-field__fixlabel  ${
                            disabled ? "disabled" : ""
                        }`}
                    >
                        {fixLabel}
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default Input;
