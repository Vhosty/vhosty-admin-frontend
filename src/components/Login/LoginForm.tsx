import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {RenderInput} from "../";

import Logo from "../../assets/images/logo-black.svg";

const LoginForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
}) => {
    return (
        <form className="login-content-form" onSubmit={handleSubmit}>
            <div className="login-content-form-logo">
                <img
                    src={Logo}
                    alt="Bookover.admin"
                    className="login-content-form-logo__image"
                />
            </div>
            <div className="login-content-form-text">
                <h2 className="login-content-form-text__title">
                    Добро пожаловать!
                </h2>

                <p className="login-content-form-text__subtitle">
                    Мы помогаем людям открыть <span>новые возможности.</span>{" "}
                    Вместе.
                </p>
            </div>
            <div className="login-content-form-input">
                <div className="login-content-form-input-item">
                    <Field
                        component={RenderInput}
                        type="name"
                        name="username"
                        label="examplemylogin2022"
                        title="Логин"
                    />
                </div>
                <div className="login-content-form-input-item">
                    <Field
                        component={RenderInput}
                        type="password"
                        name="password"
                        label="• • • • • • • • • •"
                        title="Пароль"
                    />
                </div>

                <button className="btn login-content-form-input__btn">
                    Войти
                </button>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "login-form",
    // validate,
})(LoginForm);
