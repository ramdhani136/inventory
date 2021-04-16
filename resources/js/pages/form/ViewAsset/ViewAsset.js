import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import { TitleComponent, Wrapper } from "../../../components";
import { selectValue } from "../../../features/valueSlice";
import { API_URL } from "../../../utils/Utils";
import "./ViewAsset.scss";

const ViewAsset = () => {
    const value = useSelector(selectValue);
    const { kode } = useParams();
    const [data, setData] = useState({});

    const [item, setItem] = useState([]);
    const [aktifMenu, setAktifMenu] = useState({ menu: false, aksi: false });

    const getItem = () => {
        axios.get(API_URL + "items/" + kode).then((res) => {
            setItem(res.data.data);
        });
    };

    const history = useHistory();

    useEffect(() => {
        getItem();
        if (value !== undefined) {
            setData({
                kode: value.asset.kode,
                item: value.asset.item,
                tanggal_item: value.asset.tanggal_item,
                merk: value.asset.merk,
                type: value.asset.type,
                sn: value.asset.sn,
                qty: value.asset.qty,
                kondisi: value.asset.kondisi,
                garansi: value.asset.garansi,
                tgl_garansi: value.asset.tgl_garansi,
                keterangan: value.asset.keterangan,
                id_kategori: value.asset.id_kategori,
                id_satuan: value.asset.id_satuan,
            });
        }
        return () => {
            setData({});
        };
    }, [value]);

    const validasi = () => {
        if (
            value.asset.item === "" ||
            value.asset.item === undefined ||
            value.asset.id_kategori === "" ||
            value.asset.id_kategori === undefined ||
            value.asset.id_satuan === "" ||
            value.asset.id_satuan === undefined
        ) {
            return false;
        } else {
            return true;
        }
    };

    const handleAction = () => {
        setAktifMenu({ menu: false, aksi: !aktifMenu.aksi });
    };

    const handleMenu = () => {
        setAktifMenu({ menu: !aktifMenu.menu, aksi: false });
    };

    const handleSave = () => {
        if (validasi()) {
            axios
                .put(API_URL + "items/" + value.asset.kodelama, data)
                .then((res) => {
                    history.push("/asset");
                });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                showConfirmButton: false,
                text: "Periksa kembali data anda!",
                timer: 1200,
            });
        }
    };

    const actionCancel = () => {
        axios.put(API_URL + "items/" + kode, { status: "2" }).then((res) => {
            window.location.reload();
        });
    };

    const actionDelete = () => {
        axios.delete(API_URL + "items/" + value.asset.kode).then((res) => {
            history.push("/asset");
        });
    };

    const actionSubmit = () => {
        axios
            .put(API_URL + "items/" + value.asset.kodelama, { status: "1" })
            .then((res) => {
                window.location.reload();
            });
    };

    const actionSave = () => {
        alert("tes");
    };

    const actionAmend = () => {
        axios.put(API_URL + "items/" + kode, { status: "0" }).then((res) => {
            window.location.reload();
        });
    };

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
                handleSubmit={
                    value !== undefined
                        ? value.asset.update === false
                            ? handleSave
                            : null
                        : null
                }
                handleMenu={handleMenu}
                handleAction={
                    value !== undefined
                        ? value.asset.update === true
                            ? handleAction
                            : null
                        : null
                }
                aktifMenu={aktifMenu}
                btnName={{ menu: "Menu", action: "Actions", submit: "Save" }}
                title={item.length > 0 ? item[0].item : null}
                status={getStatus()}
                actionCancel={actionCancel}
                actionSave={actionSave}
                actionDelete={actionDelete}
                actionSubmit={actionSubmit}
                actionAmend={actionAmend}
            />
            <Wrapper page="FormViewAsset" />
        </div>
    );
};

export default ViewAsset;
