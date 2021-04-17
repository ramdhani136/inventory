import "./FormViewAsset.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formautofill, Input, SelectOption, Textarea } from "../..";
import { getValue } from "../../../features/valueSlice";
import { API_URL, Datenow, Setnomor } from "../../../utils/Utils";
import { useParams } from "react-router";
import axios from "axios";

const FormViewAsset = () => {
    const [satuan, setSatuan] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [item, setItem] = useState({ item: "  " });
    const [value, setValue] = useState({ item: "  " });
    const [validNama, setValidNama] = useState();
    const [ValidKategori, setValidKategori] = useState("");
    const [validSatuan, setValidSatuan] = useState("");
    const dispatch = useDispatch();
    const [dataKategori, setDataKategori] = useState({});
    const { kode } = useParams();
    const [items, setItems] = useState([]);

    const defaultDisabled = {
        kode: true,
        item: true,
        satuan: true,
        merk: true,
        type: true,
        sn: true,
        kondisi: true,
        kategori: true,
        pic: true,
        tgl_garansi: true,
        keterangan: true,
        garansi: true,
    };

    const defaultAktif = {
        kode: true,
        item: false,
        satuan: false,
        merk: false,
        type: false,
        sn: false,
        kondisi: false,
        kategori: false,
        pic: true,
        tgl_garansi: false,
        keterangan: false,
        garansi: false,
    };

    const [disabled, setDisabled] = useState(defaultAktif);

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
        kodes();

        return () => {
            controlSatuan.abort();
            controlKategori.abort();
        };
    }, [kategori, satuan]);

    useEffect(() => {
        const controlItems = new AbortController();
        const getItems = async () => {
            try {
                const api = API_URL + "items/" + kode;
                const resultItems = await fetch(api, {
                    signal: controlItems.signal,
                });
                const getItems = await resultItems.json();
                setItem(getItems.data[0]);
                setValue(getItems.data[0]);
            } catch (error) {
                if (error.name === "AbortError") {
                    return null;
                } else {
                    throw error;
                }
            }
        };
        getItems();
        return () => {
            controlItems.abort();
        };
    }, []);

    useEffect(() => {
        dispatch(
            getValue({
                asset: { ...value, update: isChange(), kodelama: item.kode },
            })
        );
        if (value.status !== undefined) {
            if (value.status !== "0") {
                setDisabled(defaultDisabled);
            }
        }
        validasi();
    }, [value]);

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
        return () => {
            controlItems.abort();
        };
    }, [items]);

    const isChange = () => {
        if (JSON.stringify(item) == JSON.stringify(value)) {
            return true;
        } else {
            return false;
        }
    };

    const isChangeKategori = () => {
        if (value.id_kategori === item.id_kategori) {
            return true;
        } else {
            return false;
        }
    };

    const kodes = () => {
        if (isChangeKategori() === false) {
            const filterItem = items.filter(
                (item) => item.id_kategori === dataKategori.id
            );
            const last = filterItem.length - 1;

            if (filterItem.length > 0) {
                const selectkode = filterItem[last].kode;
                const selectnumber = selectkode.substr(selectkode.length - 4);
                const getnumber = Setnomor(
                    parseInt(selectnumber) + parseInt(1)
                );
                if (
                    dataKategori.kode !== undefined ||
                    dataKategori.kode !== ""
                ) {
                    setValue({
                        ...value,
                        kode: "EKB-" + dataKategori.kode + "-" + getnumber,
                    });
                }
            } else if (
                filterItem.length < 1 &&
                value.id_kategori !== undefined
            ) {
                setValue({
                    ...value,
                    kode: "EKB-" + dataKategori.kode + "-0001",
                });
            }
        }
    };

    function handleSatuan(e) {
        setValue({ ...value, id_satuan: e.id, satuan: e.nama });
    }

    function handleNama(e) {
        setValue({ ...value, item: e });
    }

    function handleMerk(e) {
        setValue({ ...value, merk: e });
    }

    function handleKategori(e) {
        setValue({ ...value, id_kategori: e.id, kategori: e.nama });
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
            <div className="FormViewAsset">
                <nav></nav>
                <div className="FormViewAsset_wrapper">
                    <div className="FormViewAsset_form">
                        <Input
                            value={{
                                nama: "Kode Asset",
                                disabled: disabled.kode,
                                type: "text",
                                value: value.kode ? value.kode : "",
                            }}
                        />

                        <Formautofill
                            nama="Satuan"
                            data={satuan}
                            handle={handleSatuan}
                            valid={validSatuan}
                            value={value.satuan ? value.satuan : ""}
                            disabled={disabled.satuan}
                        />
                        <Input
                            value={{
                                nama: "Type",
                                disabled: disabled.type,
                                type: "text",
                                value: value.type ? value.type : "",
                            }}
                            handle={handleType}
                        />
                        <SelectOption
                            nama="Kondisi"
                            data={[{ status: "Baik" }, { status: "Buruk" }]}
                            handle={handleKondisi}
                            disabled={disabled.kondisi}
                            value={value.kondisi ? value.kondisi : ""}
                        />
                        <Input
                            value={{
                                nama: "PIC",
                                disabled: disabled.pic,
                                type: "text",
                                value: value.pic ? value.pic : "",
                            }}
                        />
                        <Textarea
                            nama="Catatan"
                            handle={handleCatatan}
                            value={value.keterangan ? value.keterangan : ""}
                            disabled={disabled.keterangan}
                        />
                    </div>
                    <div className="FormViewAsset_form">
                        <Input
                            value={{
                                nama: "Nama",
                                disabled: disabled.item,
                                valid: validNama,
                                type: "text",
                                value: value.item ? value.item : "",
                            }}
                            handle={handleNama}
                        />

                        <Input
                            value={{
                                nama: "Merk",
                                disabled: disabled.merk,
                                type: "text",
                                value: value.merk ? value.merk : "",
                            }}
                            handle={handleMerk}
                        />
                        <Input
                            value={{
                                nama: "Serial Number",
                                disabled: disabled.sn,
                                type: "text",
                                value: value.sn ? value.sn : "",
                            }}
                            handle={handleSn}
                        />
                        <Formautofill
                            nama="Kategori"
                            data={kategori}
                            handle={handleKategori}
                            valid={ValidKategori}
                            value={value.kategori ? value.kategori : ""}
                            disabled={disabled.kategori}
                        />
                        <Input
                            value={{
                                nama: "Tanggal Akhir Garansi",
                                disabled: disabled.tgl_garansi,
                                type: "date",
                                value: value.tgl_garansi
                                    ? value.tgl_garansi
                                    : "",
                            }}
                            handle={handleTglGaransi}
                        />
                        <Textarea
                            nama="Keterangan Garansi"
                            handle={handleGaransi}
                            value={value.garansi ? value.garansi : ""}
                            disabled={disabled.garansi}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FormViewAsset;
