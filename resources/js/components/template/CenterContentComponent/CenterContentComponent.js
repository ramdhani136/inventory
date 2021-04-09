import React from "react";
import { FormAsset, FormViewAsset } from "../..";
import "./centercontentcomponent.scss";

const CenterContentComponent = ({ page }) => {
    return (
        <div className="centerContent">
            {page === "FormAsset" ? <FormAsset /> : null}
            {page === "FormViewAsset" ? <FormViewAsset /> : null}
        </div>
    );
};

export default CenterContentComponent;
