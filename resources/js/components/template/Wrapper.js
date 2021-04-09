import React from "react";
import { CenterContentComponent, LeftContentComponent } from "..";

const Wrapper = ({page}) => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <LeftContentComponent />
            <CenterContentComponent page={page} />
        </div>
    );
};

export default Wrapper;
