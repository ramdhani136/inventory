import React from "react";
import { CenterContentComponent, LeftContentComponent } from "..";

const Wrapper = ({page,qrcode}) => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <LeftContentComponent qrcode={qrcode} />
            <CenterContentComponent page={page} />
        </div>
    );
};

export default Wrapper;
