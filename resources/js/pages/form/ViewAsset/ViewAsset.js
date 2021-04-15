import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TitleComponent, Wrapper } from "../../../components";
import { API_URL } from "../../../utils/Utils";
import "./ViewAsset.scss";

const ViewAsset = () => {
    const { kode } = useParams();

    const [item, setItem] = useState([]);
    const [aktifMenu, setAktifMenu] = useState({ menu: false, aksi: false });

    const handleAction = () => {
        setAktifMenu({ menu: false, aksi: !aktifMenu.aksi });
    };

    const handleMenu = () => {
        setAktifMenu({ menu: !aktifMenu.menu, aksi: false });
    };


    const getItem = () => {
        axios.get(API_URL + "items/" + kode).then((res) => {
            setItem(res.data.data);
        });
    };

    useEffect(() => {
        getItem();
    }, []);

    const getStatus = () => {
        if (item.length > 0) {
            if (item[0].status === "0") {
                return "Draft";
            } else if (item[0].status === "1") {
                return "Approved";
            } else {
                return "Canceled";
            }
        }
    };

    return (
        <div>
            <TitleComponent
                // handleSubmit={}
                handleMenu={handleMenu}
                handleAction={handleAction}
                aktifMenu={aktifMenu}
                btnName={{ menu: "Menu", action: "Actions" }}
                title={item.length > 0 ? item[0].item : null}
                status={getStatus()}
            />
            <Wrapper page="FormViewAsset" />
        </div>
    );
};

export default ViewAsset;
