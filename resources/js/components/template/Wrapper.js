import React from "react";
import { CenterContentComponent, LeftContentComponent } from "..";

const Wrapper = () => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <LeftContentComponent />
            <CenterContentComponent />
        </div>
    );
};

export default Wrapper;
