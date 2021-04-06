import React from "react";
import { CenterContentComponent, LeftContentComponent } from "..";

const Wrapper = ({type}) => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <LeftContentComponent />
            <CenterContentComponent type={type} />
        </div>
    );
};

export default Wrapper;
