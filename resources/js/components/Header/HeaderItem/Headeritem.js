import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toggleSlider } from "../../../features/mainSlice";
import "./headeritem.scss";

const Headeritem = ({ data }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const toUrl = () => {
        dispatch(
            toggleSlider({
                slider: false,
                search: false,
                searchheader: "",
            })
        );
    };

    return (
        <React.Fragment>
            {data.map((menu, index) => (
                <div key={index} className="headeritem">
                    <Link
                        className="headerClik"
                        onClick={toUrl}
                        key={index}
                        to={menu.link}
                    >
                        {menu.nama}
                    </Link>
                </div>
            ))}
            {data.length < 1 ? (
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        color: "rgb(202, 202, 202)",
                    }}
                >
                    Data tidak ditemukan
                </p>
            ) : null}
        </React.Fragment>
    );
};

export default Headeritem;
