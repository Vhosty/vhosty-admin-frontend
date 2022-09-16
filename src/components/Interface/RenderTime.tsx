import React from "react";
import {Field} from "redux-form";

import {RenderSelect} from "../";

interface RenderTimeProps {
    name: string;
}

const RenderTime: React.FC<RenderTimeProps> = ({name}) => {
    const hourses = Array(24)
        .fill(0)
        .map((_, index) => ({
            title: index < 10 ? `0${index}` : `${index}`,
            key: index < 10 ? `0${index}` : `${index}`,
        }));

    const minutes = Array(60)
        .fill(0)
        .map((_, index) => ({
            title: index < 10 ? `0${index}` : `${index}`,
            key: index < 10 ? `0${index}` : `${index}`,
        }));

    return (
        <div className="time">
            <div className="time-hourses">
                <Field
                    component={RenderSelect}
                    choices={hourses}
                    border
                    small
                    name={`${name}-hourses`}
                />
            </div>
            <span className="time__text">:</span>
            <div className="time-minutes">
                <Field
                    component={RenderSelect}
                    choices={minutes}
                    border
                    small
                    name={`${name}-minutes`}
                />
            </div>
        </div>
    );
};

export default RenderTime;
