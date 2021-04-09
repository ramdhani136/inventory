import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TitleComponent, Wrapper } from "../../../components";
import { API_URL } from "../../../utils/Utils";
import "./ViewAsset.scss";

const ViewAsset = () => {
    const { kode } = useParams();
    const handleMenu = () => {
        alert("menu");
    };
    const [item, setItem] = useState([]);

    const handleAction = () => {
        alert("aksi");
    };

    const getItem = () => {
        axios.get(API_URL + "items/" + kode).then((res) => {
            setItem(res.data.data);
        });
    };

    useEffect(() => {
        getItem();
        return () => {
            setItem([]);
        };
    }, []);

    const getStatus = () => {
        if (item.length > 0) {
            if (item[0].status === "0") {
                return "Pending";
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
                handleMenu={handleMenu}
                handleAction={handleAction}
                btnName={{ menu: "Menu", action: "Actions" }}
                title={item.length > 0 ? item[0].item : null}
                status={getStatus()}
            />
            <Wrapper page="FormViewAsset"/>
        </div>
    );
};

export default ViewAsset;
