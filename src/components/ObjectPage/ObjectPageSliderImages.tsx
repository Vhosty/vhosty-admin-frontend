import React from "react";

import {ImageBox} from "../";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ObjectPageSliderImages: React.FC<any> = ({images}) => {
    const [isOpenImageBox, setIsOpenImageBox] = React.useState<boolean>(false);
    const [currentIndexImageBox, setCurrentIndexImageBox] =
        React.useState<number>(0);

    const setting = {
        items: 4,
        dots: false,
        margin: 20,
        id: "object-page-slider-images",
        autoWidth: true,
    };

    const sliderRef = React.useRef<any>(null);

    const onClickPrev = () => {
        sliderRef.current?.prev();
    };

    const onClickNext = () => {
        sliderRef.current?.next();
    };

    return (
        <>
            <ImageBox
                state={isOpenImageBox}
                setState={setIsOpenImageBox}
                images={images}
                initIndex={currentIndexImageBox}
            />

            <div
                className="object-page-slider-images"
                id="object-page-slider-images"
            >
                <button
                    className="object-page-slider-images__btn prev"
                    onClick={onClickPrev}
                >
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 1L2.41421 6.58579C1.63316 7.36684 1.63316 8.63316 2.41421 9.41421L8 15"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <button
                    className="object-page-slider-images__btn next"
                    onClick={onClickNext}
                >
                    <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 15L6.58579 9.41421C7.36684 8.63316 7.36684 7.36684 6.58579 6.58579L1 1"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <OwlCarousel {...setting} ref={sliderRef}>
                    {images.map((image: any, index: number) => (
                        <div
                            className="object-page-slider-images-item"
                            style={{
                                backgroundImage: `url('${image.url}')`,
                            }}
                            key={`object-page-slider-images-item-${index}`}
                            onClick={() => {
                                setCurrentIndexImageBox(index);
                                setIsOpenImageBox(true);
                            }}
                        ></div>
                    ))}
                </OwlCarousel>
            </div>
        </>
    );
};

export default ObjectPageSliderImages;
