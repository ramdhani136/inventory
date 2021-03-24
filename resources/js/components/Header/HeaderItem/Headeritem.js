import React from "react";
import "./headeritem.scss";

const Headeritem = ({nama}) => {
    return <div className="headeritem">
        <a>{nama}</a>
    </div>;
};

export default Headeritem;
