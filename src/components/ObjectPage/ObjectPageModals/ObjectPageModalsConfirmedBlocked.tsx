import React from "react";
import {Link, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {sendObjectPageBlocked} from "../../../redux/actions/object_page";

const ObjectPageModalsConfirmedBlocked: React.FC = () => {
    const dispatch = useDispatch();

    const [query] = useSearchParams();

    const sendBlocked = () => {
        dispatch(
            sendObjectPageBlocked(query.get("id")) as any
        );
    };

    return (
        <div className="object-page-modals-confirmed-blocked">
            <div className="object-page-modals-confirmed-blocked-bg">
                <svg
                    width="405"
                    height="362"
                    viewBox="0 0 405 362"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M160 -56C24.515 -56 -85 53.515 -85 189C-85 324.485 24.515 434 160 434C295.485 434 405 324.485 405 189C405 53.515 295.485 -56 160 -56ZM282.5 276.955L247.955 311.5L160 223.545L72.045 311.5L37.5 276.955L125.455 189L37.5 101.045L72.045 66.5L160 154.455L247.955 66.5L282.5 101.045L194.545 189L282.5 276.955Z"
                        fill="#FF0000"
                        fillOpacity="0.1"
                    />
                </svg>
            </div>

            <div className="object-page-modals-confirmed-blocked-text">
                <h3 className="object-page-modals-confirmed-blocked-text__title">
                    Заблокировать объявление
                </h3>
                <p className="object-page-modals-confirmed-blocked-text__description">
                    Вы уверены, что хотите заблокировать объявление?
                </p>
                <p className="object-page-modals-confirmed-blocked-text__description">
                    Оно будет скрыто в блок-лист без возможности внести
                    изменения пользователю.
                </p>
                <div className="object-page-modals-confirmed-blocked-text-btn">
                    <Link
                        to={document.location.pathname}
                        className="object-page-modals-confirmed-blocked-text-btn__cancel"
                    >
                        Отменить
                    </Link>
                    <button
                        className="btn object-page-modals-confirmed-blocked-text-btn__confirmed"
                        onClick={sendBlocked}
                    >
                        Заблокировать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ObjectPageModalsConfirmedBlocked;
