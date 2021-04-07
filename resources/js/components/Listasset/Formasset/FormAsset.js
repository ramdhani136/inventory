import { now } from "jquery";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { Formautofill } from "../..";
import { API_URL } from "../../../utils/Utils";
import "./formasset.scss";

const FormAsset = () => {
    const [value, setValue] = useState({ pic: "Gudang", qty: 1 });
    const [satuan, setSatuan] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [dataKategori, setDataKategori] = useState({});
    const [items, setItems] = useState([]);

    const namaRef = useRef();

    const merk = [
        { id: 1, nama: "LG" },
        { id: 2, nama: "Acer" },
    ];

    useEffect(() => {
        const controlSatuan = new AbortController();
        const controlKategori = new AbortController();

        const getSatuan = async () => {
            try {
                const api = API_URL + "satuan";
                const resultSatuan = await fetch(api, {
                    signal: controlSatuan.signal,
                });
                const getSatuan = await resultSatuan.json();
                setSatuan(getSatuan.data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return null;
                } else {
                    throw error;
                }
            }
        };

        const getKategories = async () => {
            try {
                const api = API_URL + "kategori";
                const resultCategories = await fetch(api, {
                    signal: controlKategori.signal,
                });
                const getCategories = await resultCategories.json();
                setKategori(getCategories.data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return null;
                } else {
                    throw error;
                }
            }
        };

        getKategories();
        getSatuan();
        kode();

        return () => {
            controlSatuan.abort();
            controlKategori.abort();
        };
    }, [satuan, kategori]);

    useEffect(() => {
        const controlItems = new AbortController();
        const getItems = async () => {
            try {
                const api = API_URL + "items";
                const resultItems = await fetch(api, {
                    signal: controlItems.signal,
                });
                const getItems = await resultItems.json();
                setItems(getItems.data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return null;
                } else {
                    throw error;
                }
            }
        };
        setValue({ ...value, tanggal_item: now() });

        getItems();
        return () => {
            controlItems.abort();
        };
    }, [items]);

    function handleSatuan(e) {
        setValue({ ...value, id_satuan: e.id });
    }

    function handleKategori(e) {
        setValue({ ...value, id_kategori: e.id });
        setDataKategori(e);
    }

    function setnomor(num) {
        if (num > 10000) {
            return false;
        } else if (num < 10000 && num > 999) {
            return num.toString();
        } else if (num < 1000 && num > 99) {
            return "0" + num;
        } else if (num < 100 && num > 9) {
            return "00" + num;
        } else {
            return "000" + num;
        }
    }

    const kode = () => {
        const filterItem = items.filter(
            (item) => item.id_kategori === dataKategori.id
        );
        const last = filterItem.length - 1;

        if (filterItem.length > 0) {
            const selectkode = filterItem[last].kode;
            const selectnumber = selectkode.substr(selectkode.length - 4);
            const getnumber = setnomor(parseInt(selectnumber) + parseInt(1));
            if (dataKategori.kode !== undefined || dataKategori.kode !== "") {
                setValue({
                    ...value,
                    kode: "EKB-" + dataKategori.kode + "-" + getnumber,
                });
            }
        } else if (filterItem.length < 1 && value.id_kategori !== undefined) {
            setValue({
                ...value,
                kode: "EKB-" + dataKategori.kode + "-0001",
            });
        }
    };

    const now = () => {
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();

        var output =
            d.getFullYear() +
            "-" +
            (month < 10 ? "0" : "") +
            month +
            "-" +
            (day < 10 ? "0" : "") +
            day;
        return output;
    };

    return (
        <React.Fragment>
            <div className="formasset">
                <nav></nav>
                <div className="formasset_wrapper">
                    <div className="formasset_form">
                        <div className="formasset_input">
                            <label>Kode Asset</label>
                            <input
                                value={
                                    value.id_kategori !== undefined
                                        ? value.kode
                                        : ""
                                }
                                disabled
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Satuan</label>
                            <Formautofill data={satuan} handle={handleSatuan} />
                        </div>
                        <div className="formasset_input">
                            <label>Type</label>
                            <input
                                onChange={(e) =>
                                    setValue({ ...value, type: e.target.value })
                                }
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Kondisi</label>
                            <select
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        kondisi: e.target.value,
                                    })
                                }
                            >
                                <option>Baik</option>
                                <option>Buruk</option>
                            </select>
                        </div>
                        <div className="formasset_input">
                            <label>PIC</label>
                            <input value="Gudang" disabled />
                        </div>
                        <div className="formasset_input">
                            <label>Catatan</label>
                            <textarea
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        keterangan: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className="formasset_form">
                        <div className="formasset_input">
                            <label>Nama</label>
                            <input
                                className={
                                    value.nama === undefined ||
                                    value.nama === ""
                                        ? "wajib"
                                        : null
                                }
                                ref={namaRef}
                                onChange={(e) =>
                                    setValue({ ...value, nama: e.target.value })
                                }
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Merk</label>
                            <input
                                onChange={(e) =>
                                    setValue({ ...value, merk: e.target.value })
                                }
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Serial Number</label>
                            <input
                                onChange={(e) =>
                                    setValue({ ...value, sn: e.target.value })
                                }
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Kategori</label>
                            <Formautofill
                                data={kategori}
                                handle={handleKategori}
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Tanggal Akhir Garansi</label>
                            <input
                                type="date"
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        tgl_garansi: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Keterangan Garansi</label>
                            <textarea
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        garansi: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            {console.log(value)}
        </React.Fragment>
    );
};

export default FormAsset;
