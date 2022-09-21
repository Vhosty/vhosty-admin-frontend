import React from "react";

import {sendLogout} from "../../redux/actions/logout";

const Logout: React.FC = () => {
    return (
        <div className="reglog-content-padding">
            <div className="reglog-logout">
                <h2 className="reglog-logout__title">
                    Вы уверены, что хотите выйти?
                </h2>
                <p className="reglog-logout__subtitle">
                    Мы будем скучать по Вам. Возвращайтесь к нам поскорее.
                </p>

                <div className="reglog-logout-btn">
                    <button
                        className="reglog-logout-btn__logout"
                        onClick={sendLogout}
                    >
                        Да, я хочу выйти
                    </button>

                    <button
                        onClick={() => (window.location.hash = "")}
                        className="btn reglog-logout-btn__btn"
                    >
                        Нет, остаться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
