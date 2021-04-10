import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formautofill, Input, SelectOption, Textarea } from "../..";
import { getValue } from "../../../features/valueSlice";
import { API_URL, Datenow, Setnomor } from "../../../utils/Utils";
import "./formasset.scss";

const FormAsset = () => {
    const [value, setValue] = useState({ pic: "Gudang", qty: 1 });
    const [satuan, setSatuan] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [dataKategori, setDataKategori] = useState({});
    const [items, setItems] = useState([]);
    const [validNama, setValidNama] = useState("");
    const [ValidKategori, setValidKategori] = useState("");
    const [validSatuan, setValidSatuan] = useState("");
    const dispatch = useDispatch();

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
        setValue({ ...value, tanggal_item: Datenow() });
        validasi();
        getItems();
        dispatch(getValue({asset: value }));
        return () => {
            controlItems.abort();
        };
    }, [items]);

    function handleSatuan(e) {
        setValue({ ...value, id_satuan: e.id,satuan:e.nama });
    }

    function handleNama(e) {
        setValue({ ...value, item: e });
    }

    function handleMerk(e) {
        setValue({ ...value, merk: e });
    }

    function handleKategori(e) {
        setValue({ ...value, id_kategori: e.id, kategori:e.nama });
        setDataKategori(e);
    }

    function handleSn(e) {
        setValue({ ...value, sn: e });
    }

    function handleType(e) {
        setValue({ ...value, type: e });
    }

    function handleTglGaransi(e) {
        setValue({ ...value, tgl_garansi: e });
    }

    function handleGaransi(e) {
        setValue({ ...value, garansi: e });
    }

    function handleCatatan(e) {
        setValue({ ...value, keterangan: e });
    }

    function handleKondisi(e) {
        setValue({ ...value, kondisi: e });
    }

    const kode = () => {
        const filterItem = items.filter(
            (item) => item.id_kategori === dataKategori.id
        );
        const last = filterItem.length - 1;

        if (filterItem.length > 0) {
            const selectkode = filterItem[last].kode;
            const selectnumber = selectkode.substr(selectkode.length - 4);
            const getnumber = Setnomor(parseInt(selectnumber) + parseInt(1));
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

    const validasi = () => {
        if (value.item === "" || value.item === undefined) {
            setValidNama(true);
        } else {
            setValidNama(false);
        }

        if (value.id_kategori === "" || value.id_kategori === undefined) {
            setValidKategori(true);
        } else {
            setValidKategori(false);
        }

        if (value.id_satuan === "" || value.id_satuan === undefined) {
            setValidSatuan(true);
        } else {
            setValidSatuan(false);
        }
    };

    return (
        <React.Fragment>
            <div className="formasset">
                <nav></nav>
                <div className="formasset_wrapper">
                    <div className="formasset_form">
                        <Input
                            value={{
                                nama: "Kode Asset",
                                disabled: true,
                                type: "text",
                                value: value.kode,
                            }}
                        />

                        <Formautofill
                            nama="Satuan"
                            data={satuan}
                            handle={handleSatuan}
                            valid={validSatuan}
                            value={value.satuan}
                        />
                        <Input
                            value={{
                                nama: "Type",
                                disabled: false,
                                type: "text",
                            }}
                            handle={handleType}
                        />
                        <SelectOption
                            nama="Kondisi"
                            data={[{ status: "Baik" }, { status: "Buruk" }]}
                            handle={handleKondisi}
                        />
                        <Input
                            value={{
                                nama: "PIC",
                                disabled: true,
                                type: "text",
                                value: "Gudang",
                            }}
                        />
                        <Textarea nama="Catatan" handle={handleCatatan} />
                    </div>
                    <div className="formasset_form">
                        <Input
                            value={{
                                nama: "Nama",
                                disabled: false,
                                valid: validNama,
                                type: "text",
                            }}
                            handle={handleNama}
                        />

                        <Input
                            value={{
                                nama: "Merk",
                                disabled: false,
                                type: "text",
                            }}
                            handle={handleMerk}
                        />
                        <Input
                            value={{
                                nama: "Serial Number",
                                disabled: false,
                                type: "text",
                            }}
                            handle={handleSn}
                        />
                        <Formautofill
                            data={kategori}
                            handle={handleKategori}
                            nama="Kategori"
                            valid={ValidKategori}
                            value={value.kategori}
                        />
                        <Input
                            value={{
                                nama: "Tanggal Akhir Garansi",
                                disabled: false,
                                type: "date",
                            }}
                            handle={handleTglGaransi}
                        />
                        <Textarea
                            nama="Keterangan Garansi"
                            handle={handleGaransi}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FormAsset;
