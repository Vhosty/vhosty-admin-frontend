import React from "react";
import {WrappedFieldProps} from "redux-form";

interface RenderTextareaProps extends WrappedFieldProps {
    label: string;
    height?: number;
}

const RenderTextarea: React.FC<RenderTextareaProps> = ({
    input,
    label,
    meta: {touched, error},
    height,
}) => {
    return (
        <div className="textarea" style={height ? {height: `${height}px`} : {}}>
            <textarea
                {...input}
                placeholder={label}
                className={`textarea__field ${touched && error ? "error" : ""}`}
            />

            {touched && error && (
                <span className="textarea__error">{error}</span>
            )}
        </div>
    );
};

export default RenderTextarea;
