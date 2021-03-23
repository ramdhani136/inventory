import React from "react";
import "./sidebarmenu.scss";

const Sidebarmenu = ({Icon,nama,link}) => {
    return <React.Fragment>
        <div className="sidebarmenu">
            <Icon className="sidebar_icon"/>
            <a>{nama}</a>
        </div>
    </React.Fragment>;
};

export default Sidebarmenu;
