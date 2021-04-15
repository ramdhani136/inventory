import "./FormViewAsset.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formautofill, Input, SelectOption, Textarea } from "../..";
import { getValue } from "../../../features/valueSlice";
import { API_URL, Datenow } from "../../../utils/Utils";
import { useParams } from "react-router";

const FormViewAsset = () => {
    const [satuan, setSatuan] = useState([]);
    const [kategori, setKategori] = useState([]);
    const [value, setValue] = useState({ item: "  " });
    const [validNama, setValidNama] = useState();
    const [ValidKategori, setValidKategori] = useState("");
    const [validSatuan, setValidSatuan] = useState("");
    const dispatch = useDispatch();
    const [dataKategori, setDataKategori] = useState({});
    const { kode } = useParams();

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
                setValue(getItems.data[0]);
            } catch (error) {
                if (error.name === "AbortError") {
                    return null;
                } else {
                    throw error;
                }
            }
        };
        validasi();
        getItems();
        if (value.status !== undefined) {
            if (value.status !== "0") {
                setDisabled(defaultDisabled)
            }
        }
        dispatch(getValue({ asset: value }));
        return () => {
            controlItems.abort();
        };
    }, [value]);

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
                                value: value.kode,
                            }}
                        />

                        <Formautofill
                            nama="Satuan"
                            data={satuan}
                            handle={handleSatuan}
                            valid={validSatuan}
                            value={value.satuan}
                            disabled={disabled.satuan}
                        />
                        <Input
                            value={{
                                nama: "Type",
                                disabled: disabled.type,
                                type: "text",
                                value: value.type,
                            }}
                            handle={handleType}
                        />
                        <SelectOption
                            nama="Kondisi"
                            data={[{ status: "Baik" }, { status: "Buruk" }]}
                            handle={handleKondisi}
                            disabled={disabled.kondisi}
                            value={value.kondisi}
                        />
                        <Input
                            value={{
                                nama: "PIC",
                                disabled: disabled.pic,
                                type: "text",
                                value: value.pic,
                            }}
                        />
                        <Textarea
                            nama="Catatan"
                            handle={handleCatatan}
                            value={value.keterangan}
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
                                value: value.item,
                            }}
                            handle={handleNama}
                        />

                        <Input
                            value={{
                                nama: "Merk",
                                disabled: disabled.merk,
                                type: "text",
                                value: value.merk,
                            }}
                            handle={handleMerk}
                        />
                        <Input
                            value={{
                                nama: "Serial Number",
                                disabled: disabled.sn,
                                type: "text",
                                value: value.sn,
                            }}
                            handle={handleSn}
                        />
                        <Formautofill
                            nama="Kategori"
                            data={kategori}
                            handle={handleKategori}
                            valid={ValidKategori}
                            value={value.kategori}
                            disabled={disabled.kategori}
                        />
                        <Input
                            value={{
                                nama: "Tanggal Akhir Garansi",
                                disabled: disabled.tgl_garansi,
                                type: "date",
                                value: value.tgl_garansi,
                            }}
                            handle={handleTglGaransi}
                        />
                        <Textarea
                            nama="Keterangan Garansi"
                            handle={handleGaransi}
                            value={value.garansi}
                            disabled={disabled.garansi}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FormViewAsset;
