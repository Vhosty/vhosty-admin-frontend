import React from "react";
import {Link} from "react-router-dom";

import {HeaderUserModal, Popup} from "../../";

const HeaderUser: React.FC = () => {
    const [activeHeaderModal, setActiveHeaderModal] =
        React.useState<boolean>(false);

    const openHeaderModal = () => {
        setActiveHeaderModal(true);
    };

    return (
        <>
            <div className="header-block-user">
                <button
                    className="header-block-user__btn"
                    onClick={openHeaderModal}
                >
                    Личный кабинет
                </button>

                <button
                    className="header-block-user__btn-mobile"
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
        </>
    );
};

export default HeaderUser;
