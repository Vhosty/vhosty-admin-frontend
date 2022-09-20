import React from "react";
import {Link} from "react-router-dom";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {TitleIcon, RenderSelect, RenderTextarea} from "../../";

const ObjectPageModalsConfirmedStatus: React.FC<
    {} & InjectedFormProps<{}, {}>
> = ({handleSubmit}) => {
    return (
        <form
            className="object-page-modals-confirmed-status"
            onSubmit={handleSubmit}
        >
            <div className="object-page-modals-confirmed-status-text">
                <h3 className="object-page-modals-confirmed-status-text__title">
                    Вынесение решения
                </h3>
                <p className="object-page-modals-confirmed-status-text__description">
                    Решите, будет ли это решение публиковаться сейчас или ему
                    нужна доработка.
                </p>
            </div>

            <div className="object-page-modals-confirmed-status-block">
                <TitleIcon title="Статус решения" marginBottom>
                    <svg
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.793 14.168H1.54034C0.690021 14.168 0 15.095 0 16.2377V20.0013H13.3333V16.2377C13.3333 15.095 12.6434 14.168 11.793 14.168Z"
                            fill="#00A0A0"
                        />
                        <path
                            d="M19.7309 15.9782L10.6063 6.8535L12.3687 5.09421C12.6593 5.35047 13.1062 5.33794 13.3812 5.06297C13.6687 4.77237 13.6687 4.30673 13.3812 4.01613L9.58135 0.219413C9.29385 -0.0711844 8.82512 -0.0711844 8.53765 0.219413C8.24706 0.506917 8.24706 0.975648 8.53765 1.26311L8.50641 1.23186L3.68157 6.05353L3.71282 6.08787C3.42531 5.79727 2.95658 5.79727 2.66912 6.08787C2.37852 6.37537 2.37852 6.8441 2.66912 7.13161L6.46584 10.9314C6.75644 11.2189 7.22517 11.2189 7.51267 10.9314C7.80018 10.6408 7.80018 10.1752 7.51267 9.88467L7.54392 9.91584L9.30634 8.15655L18.4278 17.2781C18.7872 17.6374 19.3716 17.6374 19.7309 17.2781C20.0903 16.9187 20.0903 16.3375 19.7309 15.9782Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>

                <Field
                    component={RenderSelect}
                    small
                    border
                    choices={[
                        {title: "Подтверждено", key: "published"},
                        {title: "Отправлено на доработки", key: "declined"},
                    ]}
                    name="status"
                />
            </div>

            <div className="object-page-modals-confirmed-status-block">
                <TitleIcon title="Комментарий к решению" marginBottom>
                    <svg
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.960938 2.87844V17.0384C0.960938 18.3984 2.30494 19.5184 3.93694 19.5184H16.7049C18.3369 19.5184 19.6809 18.3984 19.6809 17.0384V13.5984L19.0089 14.1584C18.3369 14.7184 17.3769 15.1184 16.4169 15.3584L14.4009 15.6784C13.5369 15.8384 12.5769 15.5984 12.0969 15.0384C11.6169 14.5584 11.4249 13.9984 11.6169 13.3584L12.0969 11.5984C12.2889 10.7984 12.7689 10.0784 13.5369 9.43844L18.3369 5.43844C18.7209 5.11844 19.2969 4.79844 19.7769 4.63844V2.87844C19.7769 1.51844 18.4329 0.398438 16.8009 0.398438H3.93694C2.30494 0.398438 0.960938 1.51844 0.960938 2.87844ZM5.66494 3.19844H14.8809C15.4569 3.19844 15.8409 3.51844 15.8409 3.99844C15.8409 4.47844 15.4569 4.79844 14.8809 4.79844H5.66494C5.08894 4.79844 4.70494 4.47844 4.70494 3.99844C4.70494 3.59844 5.18494 3.19844 5.66494 3.19844ZM5.66494 6.47844H11.0409C11.6169 6.47844 12.0009 6.79844 12.0009 7.27844C12.0009 7.75844 11.6169 8.07844 11.0409 8.07844H5.66494C5.08894 8.07844 4.70494 7.75844 4.70494 7.27844C4.70494 6.79844 5.18494 6.47844 5.66494 6.47844Z"
                            fill="#00A0A0"
                        />
                        <path
                            d="M22.4647 6.64016C21.6967 6.00016 20.3527 6.00016 19.5847 6.64016L14.7847 10.6402C14.3047 11.0402 14.0167 11.4402 13.9207 12.0002L13.4407 13.6802C13.3447 13.9202 13.6327 14.1602 13.9207 14.0802L16.0327 13.6802C16.6087 13.6002 17.1847 13.2802 17.6647 12.9602L22.4647 8.96016C23.2327 8.32016 23.2327 7.28016 22.4647 6.64016Z"
                            fill="#00A0A0"
                        />
                    </svg>
                </TitleIcon>

                <Field
                    component={RenderTextarea}
                    name="comment"
                    label="Например, заменить фотографию №3"
                />
            </div>

            <div className="object-page-modals-confirmed-status-btn">
                <Link
                    to={document.location.pathname}
                    className="object-page-modals-confirmed-status-btn__cancel"
                >
                    Отменить изменения
                </Link>

                <button className="btn object-page-modals-confirmed-status-btn__send">
                    Завершить
                </button>
            </div>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "object-page-modals-confirmed-status",
    // validate,
})(ObjectPageModalsConfirmedStatus);
