import React from "react";
import {useDispatch} from "react-redux";

import LoginBg from "../assets/images/login-bg.jpg";

import {LoginForm} from "../components/";

import {sendLogin} from "../redux/actions/login";

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = (data: any) => {
        return dispatch(sendLogin(data) as any);
    };

    return (
        <section
            className="login"
            style={{backgroundImage: `url("${LoginBg}")`}}
        >
            <div className="login-content">
                <LoginForm onSubmit={onSubmit} />
            </div>
        </section>
    );
};

export default Login;
