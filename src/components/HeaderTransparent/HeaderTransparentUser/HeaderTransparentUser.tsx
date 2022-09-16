import React from "react";
import {Link} from "react-router-dom";

import {
    HeaderTransparentUserNotifications,
    HeaderUserModal,
    Popup,
} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

const HeaderTransparentUser: React.FC = () => {
    const [activeHeaderModal, setActiveHeaderModal] =
        React.useState<boolean>(false);

    const openHeaderModal = () => {
        setActiveHeaderModal(true);
    };

    return (
        <div className="header-transparent-block-user">
            {/* <HeaderTransparentUserNotifications /> */}

            <button
                className="header-transparent-block-user__btn"
                onClick={openHeaderModal}
            >
                Личный кабинет
            </button>

            <button
                className="header-transparent-block-user__btn-mobile"
                onClick={openHeaderModal}
            ></button>

            <Popup
                wrapperActive={activeHeaderModal}
                setWrapperActive={setActiveHeaderModal}
                addClassWrapper="header-block-user-modal-wrapper"
            >
                <HeaderUserModal />
            </Popup>
        </div>
    );
};

export default HeaderTransparentUser;
