import React from "react";
import "./listmenu.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSlider } from "../../../features/mainSlice";

const Listmenu = ({ nama, link, Icon }) => {
    const dispatch = useDispatch();

    const clickLink = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: false,
            })
        );
    };

    return (
        <Link onClick={clickLink} to={link}>
            <div className="listmenu">
                <Icon className="listmenu__icon" />
                <a>{nama}</a>
                <KeyboardArrowDownIcon className="listmenu_caret" />
            </div>
        </Link>
    );
};

export default Listmenu;
