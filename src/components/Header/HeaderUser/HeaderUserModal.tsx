import React from "react";
import {NavLink, Link} from "react-router-dom";

const HeaderUserModal: React.FC = () => {
    return (
        <div className="header-block-user-modal">
            <NavLink
                to="/cabinet/main"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">Главная</p>
            </NavLink>

            <NavLink
                to="/cabinet/users"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">
                    Пользователи
                </p>
            </NavLink>

            <NavLink
                to="/cabinet/objects"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">
                    Объявления
                </p>
            </NavLink>

            <Link to="#logout" className="header-block-user-modal-item">
                <p className="header-block-user-modal-item__title">
                    Выйти из аккаунта
                </p>
            </Link>
        </div>
    );
};

export default HeaderUserModal;
