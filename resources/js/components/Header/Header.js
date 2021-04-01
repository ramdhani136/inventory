import React, { useEffect, useState } from "react";
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
    // const [value, Setvalue] = useState(main.searchheader);

    const home = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: false,
                searchheader: "",
            })
        );
        history.push("/");
    };

    const buttonSlider = () => {
        dispatch(
            toggleSlider({
                slider: !main.slider,
                search: false,
                searchheader: "",
            })
        );
    };

    const inputSeacrh = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: !main.search,
                searchheader: "",
            })
        );
    };

    function search(rows) {
        return rows.filter((row) => row.nama.toLowerCase().indexOf(main.searchheader.toLowerCase()) > -1);
    }

    const menuHeader = [
        { id: "1", nama: "Daftar Asset", link: "/asset" },
        { id: "2", nama: "Mutasi Asset", link: "/mutasiasset" },
        { id: "3", nama: "Stock Opname", link: "/stockopname" },
        { id: "3", nama: "Input Asset", link: "/form/asset" },
        { id: "4", nama: "History Asset", link: "/history" },
        { id: "5", nama: "Laporan Asset", link: "/laporan" },
        { id: "6", nama: "Kategori Asset", link: "/kategori" },
        { id: "7", nama: "Data Users", link: "/users" },
    ];

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                dispatch(
                    toggleSlider({
                        slider: false,
                        search: false,
                        searchheader: "",
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
                            onChange={(e) =>
                                dispatch(
                                    toggleSlider({
                                        slider: false,
                                        search: true,
                                        searchheader: e.target.value,
                                    })
                                )
                            }
                            value={main.searchheader}
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
                        <Headeritem data={search(menuHeader)} />
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
