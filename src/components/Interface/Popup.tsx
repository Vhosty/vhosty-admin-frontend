import React from "react";

interface PopupProps {
    wrapperActive: boolean;
    setWrapperActive: any;

    addClassWrapper?: string;
    style?: any;

    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
    wrapperActive,
    setWrapperActive,
    addClassWrapper,
    children,
    style,
}) => {
    const [active, setActive] = React.useState<boolean>(false);
    const [activeAnimation, setActiveAnimation] =
        React.useState<boolean>(false);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener("mousedown", toggle);
        document.addEventListener("touchstart", toggle);

        return () => {
            document.removeEventListener("mousedown", toggle);
            document.removeEventListener("touchstart", toggle);
        };
    }, [PopupRef]);

    React.useEffect(() => {
        if (wrapperActive) {
            setActive(true);
        } else {
            close();
        }
    }, [wrapperActive]);

    const close = () => {
        setActiveAnimation(true);

        setTimeout(() => {
            setActiveAnimation(false);

            setActive(false);
            setWrapperActive(false);
        }, 180);
    };

    const toggle = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            close();
        }
    };

    return (
        <>
            {active ? (
                <div
                    className={`popup ${activeAnimation ? "close" : ""} ${
                        addClassWrapper ? addClassWrapper : ""
                    }`}
                    style={style}
                    ref={PopupRef}
                >
                    {children}
                </div>
            ) : null}
        </>
    );
};

export default Popup;
