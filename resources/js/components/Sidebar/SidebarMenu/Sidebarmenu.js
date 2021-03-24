import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSlider } from "../../../features/mainSlice";
import "./sidebarmenu.scss";

const Sidebarmenu = ({ Icon, nama, link }) => {
    const dispatch = useDispatch();

    const refreash = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: false,
            })
        );
    };

    return (
        <React.Fragment>
            <Link onClick={refreash} to={link}>
                <div className="sidebarmenu">
                    <Icon className="sidebar_icon" />
                    <a>{nama}</a>
                </div>
            </Link>
        </React.Fragment>
    );
};

export default Sidebarmenu;
