import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div className="header">
           <div className="header__logo"><img src="http://54.251.208.55/assets/erpnext/images/erp-icon.svg"/></div>
            <MenuIcon className="header__burger"/>
            <div className="header__menu">
                <div className="header__search">
                    <input placeholder="Search or Type a command"/>
                    <SearchIcon className="header_seacrhicon"/>
                </div>
                <div className="header__settings">
                    <Avatar src="https://assets-a1.kompasiana.com/items/album/2020/07/08/zamazn-5f04cd42097f364494336094.jpg" className="header__avatar"/>
                    <a>Ilham Ramdhani</a>
                    <ArrowDropDownIcon className="header__caret"/>
                    <NotificationsIcon className="header__notif"/>
                    <div className="header__notif__on"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
