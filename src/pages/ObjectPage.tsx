import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {useParams} from "react-router-dom";

import {
    ObjectPageBtn,
    ObjectPageCover,
    ObjectPageSliderImages,
    ObjectPageAbout,
    ObjectPageRoom,
    ObjectPageMaps,
    ObjectPageFeedbacks,
    ObjectPageServices,
    ObjectPageTerms,
    ObjectPageFaq,
} from "../components/";

import {
    fetchObjectPageItemById,
    fetchObjectPageItemByIdRooms,
    fetchObjectPageItemByIdServices,
    fetchObjectPageItemByIdTerms,
} from "../redux/actions/object_page";

import {useTypedSelector} from "../hooks/useTypedSelector";
import moment from "moment";

const ObjectPage: React.FC = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const {
        itemById,
        isLoaded,
        itemByIdRooms,
        isLoadedRooms,
        itemByIdServices,
        isLoadedServices,
        itemByIdTerms,
        isLoadedTerms,
    } = useTypedSelector(({object_page}) => object_page);

    React.useEffect(() => {
        const date: any = {
            checkin_date: moment().format("YYYY-MM-DD"),
            checkout_date: moment().add(1, "days").format("YYYY-MM-DD"),
        };

        dispatch(fetchObjectPageItemById(id ? id : "") as any);
        dispatch(fetchObjectPageItemByIdRooms(id ? id : "", date) as any);
        dispatch(fetchObjectPageItemByIdServices(id ? id : "") as any);
        dispatch(fetchObjectPageItemByIdTerms(id ? id : "") as any);
    }, [id]);

    return (
        <>
            {isLoaded && isLoadedRooms && isLoadedServices && isLoadedTerms ? (
                <>
                    <Helmet>
                        <title>Bookover | {itemById.name}</title>
                    </Helmet>

                    <ObjectPageBtn />

                    <ObjectPageCover {...itemById} />

                    <section className="object-page">
                        <div className="container">
                            <div className="object-page-wrapper">
                                <ObjectPageSliderImages {...itemById} />

                                <ObjectPageAbout {...itemById} />

                                {/* <PrimeSectionBlock /> */}

                                <ObjectPageRoom rooms={itemByIdRooms} />

                                {/* <ObjectPageMaps /> */}

                                {/* <ObjectPageFeedbacks /> */}

                                <ObjectPageServices
                                    services={itemByIdServices}
                                />

                                <ObjectPageTerms {...itemByIdTerms} />

                                {/* <ObjectPageFaq /> */}
                            </div>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    );
};

export default ObjectPage;
