import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./header.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Headeritem } from "..";
import { useDispatch, useSelector } from "react-redux";
import { selectMain, toggleSlider } from "../../features/mainSlice";

const Header = () => {
    const main = useSelector(selectMain);
    const dispatch = useDispatch();
    const history = useHistory();

    const home = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: false,
            })
        );
        history.push("/");
    };

    const buttonSlider = () => {
        dispatch(
            toggleSlider({
                slider: !main.slider,
                seacrh: false,
            })
        );
    };

    const inputSeacrh = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: !main.search,
            })
        );
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                dispatch(
                    toggleSlider({
                        slider: false,
                        search: false,
                    })
                );
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div className="header">
            <div className="header__logo">
                <img
                    src="http://54.251.208.55/assets/erpnext/images/erp-icon.svg"
                    onClick={home}
                />
            </div>
            {main.slider ? (
                <CloseIcon onClick={buttonSlider} className="header__burger" />
            ) : (
                <MenuIcon onClick={buttonSlider} className="header__burger" />
            )}
            <div className="header__menu">
                <div className="header__mid">
                    <div className="header__search">
                        <input
                            onClick={inputSeacrh}
                            placeholder="Search or Type a command"
                        />
                        <SearchIcon className="header_seacrhicon" />
                    </div>
                    <div
                        className={
                            main.search
                                ? "header__search_item"
                                : "header__search_item header__item__close"
                        }
                    >
                        <Headeritem nama="Daftar Asset" />
                        <Headeritem nama="Mutasi Asset" />
                        <Headeritem nama="Stock Opname" />
                        <Headeritem nama="History Asset" />
                        <Headeritem nama="Laporan Asset" />
                        <Headeritem nama="Data Users" />
                    </div>
                </div>

                <div className="header__settings">
                    <Avatar
                        src="https://assets-a1.kompasiana.com/items/album/2020/07/08/zamazn-5f04cd42097f364494336094.jpg"
                        className="header__avatar"
                    />
                    <a>Ilham Ramdhani</a>
                    <ArrowDropDownIcon className="header__caret" />
                    <NotificationsIcon className="header__notif" />
                    <div className="header__notif__on"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
