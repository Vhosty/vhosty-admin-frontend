import React from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface ImageBoxProps {
    state: boolean;
    setState: (status: boolean) => void;
    images: any;
    initIndex?: number;
}

const ImageBox: React.FC<ImageBoxProps> = ({
    state,
    setState,
    images,
    initIndex,
}) => {
    const [imageBoxState, setImageBoxState] = React.useState(state);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    React.useEffect(() => {
        setImageBoxState(state);
    }, [state]);

	React.useEffect(() => {
		if (initIndex) setPhotoIndex(initIndex);
	}, [initIndex]);

    return (
        <>
            {imageBoxState ? (
                images[0].url ? (
                    <Lightbox
                        mainSrc={images[photoIndex].url}
                        nextSrc={images[(photoIndex + 1) % images.length].url}
                        prevSrc={
                            images[
                                (photoIndex + images.length - 1) % images.length
                            ].url
                        }
                        onCloseRequest={() => {
                            setImageBoxState(false);
                            setState(false);
                            setPhotoIndex(0);
                        }}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + images.length - 1) % images.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                        animationDuration={200}
                    />
                ) : (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={
                            images[
                                (photoIndex + images.length - 1) % images.length
                            ]
                        }
                        onCloseRequest={() => {
                            setImageBoxState(false);
                            setState(false);
                            setPhotoIndex(0);
                        }}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + images.length - 1) % images.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                        animationDuration={200}
                    />
                )
            ) : null}
        </>
    );
};

export default ImageBox;
