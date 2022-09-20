import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {sendDeleteObjects} from "../../../redux/actions/cabinet/cabinetObjects";

const CabinetUsersDeleteBtn: React.FC = () => {
    const dispatch = useDispatch();

    const {deleteIds} = useTypedSelector(({cabinetObjects}) => cabinetObjects);

    const sendDeleteOnClick = () => {
        dispatch(sendDeleteObjects(deleteIds) as any);
    };

    return (
        <div className="cabinet-block-users-delete">
            <button
                className={`cabinet-block-users-delete__btn ${
                    Object.keys(deleteIds).length ? "" : "disabled"
                }`}
                onClick={sendDeleteOnClick}
            >
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 0C4.47714 0 0 4.47714 0 10C0 15.5229 4.47714 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47714 15.5229 0 10 0ZM6.0679 4.03924C7.23464 3.26888 8.60188 2.85786 10 2.85714C11.4001 2.85567 12.7694 3.26821 13.9357 4.04286L4.04286 13.9357C1.86924 10.6437 2.77585 6.2129 6.0679 4.03924ZM13.9321 15.9608C12.7654 16.7311 11.3982 17.1421 10 17.1429C8.59987 17.1443 7.23058 16.7318 6.06429 15.9571L15.9571 6.06429C18.1308 9.35629 17.2242 13.7871 13.9321 15.9608Z" />
                </svg>
                Заблокировать выбранные
            </button>
        </div>
    );
};

export default CabinetUsersDeleteBtn;
