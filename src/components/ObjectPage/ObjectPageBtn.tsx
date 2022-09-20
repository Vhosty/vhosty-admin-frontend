import React from "react";
import {Link, useParams} from "react-router-dom";

const ObjectPageBtn: React.FC = () => {
    const {id} = useParams();

    return (
        <div className="object-page-btn">
            <Link
                to={`?id=${id}#object_page_confirmed_blocked`}
                className="btn-light object-page-btn__btn"
            >
                Заблокировать
            </Link>

            <Link
                to={`?id=${id}#object_page_confirmed_status`}
                className="btn object-page-btn__btn"
            >
                Вынести решение
            </Link>
        </div>
    );
};

export default ObjectPageBtn;
