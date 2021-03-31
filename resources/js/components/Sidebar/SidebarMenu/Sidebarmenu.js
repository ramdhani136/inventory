import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleSlider } from "../../../features/mainSlice";
import "./sidebarmenu.scss";

const Sidebarmenu = ({ Icon, nama, link }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const toLink = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: false,
                searchheader: "",
            })
        );
        history.push(link);
    };

    return (
        <React.Fragment>
            <div className="sidebarmenu" onClick={toLink}>
                <Icon className="sidebar_icon" />
                <a>{nama}</a>
            </div>
        </React.Fragment>
    );
};

export default Sidebarmenu;
