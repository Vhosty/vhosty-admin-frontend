import React from "react";
import {useDispatch} from "react-redux";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import "moment/locale/ru";

import {
    Footer,
	CabinetMain,
	CabinetObjects
} from "./components/";

import {Reglog, Login, Cabinet} from "./pages";

const App = () => {
    const dispatch = useDispatch();

    const {pathname} = useLocation();

    const isRedirectUser = localStorage.getItem("accessToken");

    React.useEffect(() => {
        let cords: any = ["scrollX", "scrollY"];

        window.addEventListener("unload", (e) =>
            cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
        );
        window.scroll(...cords.map((cord: any) => localStorage[cord]));

        // if (localStorage.getItem("accessToken")) {
        //     dispatch(fetchUserAboutMe() as any);
        // } else {
        //     dispatch(setUserIsPending(false));
        // }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <React.Suspense fallback={<></>}>
                <Reglog />

                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route
                        path="/cabinet/main"
                        element={
                            isRedirectUser ? (
                                <Cabinet block={<CabinetMain />} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route
                        path="/cabinet/objects"
                        element={
                            isRedirectUser ? (
                                <Cabinet block={<CabinetObjects />} />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                </Routes>

                {pathname === "/" ? null : <Footer />}
            </React.Suspense>
        </>
    );
};

export default App;
