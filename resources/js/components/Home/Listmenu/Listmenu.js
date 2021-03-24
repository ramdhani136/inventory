import React from "react";
import "./listmenu.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";

const Listmenu = ({ nama, link, Icon }) => {
    return (
        <Link to={link}>
            <div className="listmenu">
                <Icon className="listmenu__icon" />
                <a>{nama}</a>
                <KeyboardArrowDownIcon className="listmenu_caret" />
            </div>
        </Link>
    );
};

export default Listmenu;
