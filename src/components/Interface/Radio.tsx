import React from "react";
import {v4} from "uuid";

interface RadioProps {
    name: string;
    label: string;
    value: string | number;

    defaultChecked?: boolean;
	checked?: boolean;
	
    small?: boolean;

    onChange?: (value: string | number) => void;
}

const Radio: React.FC<RadioProps> = ({
    name,
    label,
    value,
    defaultChecked,
    checked,
    small,
    onChange,
}) => {
    const id = v4();

    return (
        <div className={`radio ${small ? "small" : ""}`}>
            <input
                type="radio"
                id={`radio-${id}`}
                name={name}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                defaultChecked={defaultChecked}
                checked={checked}
            />
            <label htmlFor={`radio-${id}`}>{label}</label>
        </div>
    );
};

export default Radio;
