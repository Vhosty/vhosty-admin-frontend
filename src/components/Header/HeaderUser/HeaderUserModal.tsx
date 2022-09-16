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
                to="/cabinet/setting"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">Аккаунт</p>
            </NavLink>

            <NavLink
                to="/cabinet/objects"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">Объекты</p>
            </NavLink>

            <NavLink
                to="/cabinet/reserv"
                className={({isActive}) =>
                    `header-block-user-modal-item ${isActive ? "active" : ""}`
                }
            >
                <p className="header-block-user-modal-item__title">
                    Бронирования
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
