import React from "react";
import {Link} from "react-router-dom";

import {Field} from "redux-form";

import {RenderCheckbox} from "../";

const PolicyCheckbox: React.FC = () => {
    return (
        <div className="policy-checkbox">
            <Field component={RenderCheckbox} name="policyCheckbox" small>
                Я соглашаюсь с условиями&nbsp;
                <Link to="/policy">Политики конфиденциальности</Link> и&nbsp;
                <Link to="/">Правилами размещения объектов</Link>
            </Field>
        </div>
    );
};

export default PolicyCheckbox;
