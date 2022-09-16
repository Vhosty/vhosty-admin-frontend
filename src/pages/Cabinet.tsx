import React from "react";

import CabinetBg from "../assets/images/cabinet-bg.jpg";

import {HeaderTransparent, CabinetMenu} from "../components/";

interface CabinetProps {
    block: React.ReactNode;
}

const Cabinet: React.FC<CabinetProps> = ({block}) => {
    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <HeaderTransparent bgImage={CabinetBg} />

                    <CabinetMenu />

                    {block}
                </div>
            </div>
        </section>
    );
};

export default Cabinet;
