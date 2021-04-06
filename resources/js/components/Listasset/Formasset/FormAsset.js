import { now } from "jquery";
import React, { useEffect, useRef, useState } from "react";
import { Formautofill } from "../..";
import { API_URL } from "../../../utils/Utils";
import "./formasset.scss";

const FormAsset = () => {
    const [value, setValue] = useState({ pic: "Gudang" });
    const [satuan, setSatuan] = useState([]);
    const [kategori, setKategori] = useState([]);

    const namaRef = useRef();

    const merk = [
        { id: 1, nama: "LG" },
        { id: 2, nama: "Acer" },
    ];

    useEffect(() => {
        const controlSatuan = new AbortController();
        const controlCategories = new AbortController();
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
                    signal: controlCategories.signal,
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
        getSatuan();
        getKategories();
        return () => {
            controlSatuan.abort();
            controlCategories.abort();
        };
    }, [satuan, kategori]);

    function handleSatuan(e) {
        setValue({ ...value, satuan: e.id });
    }

    function handleMerk(e) {
        setValue({ ...value, merk: e.id });
    }

    function handleKategori(e) {
        setValue({ ...value, kategori: e.id });
    }

    return (
        <React.Fragment>
            <div className="formasset">
                <nav></nav>
                <div className="formasset_wrapper">
                    <div className="formasset_form">
                        <div className="formasset_input">
                            <label>Kode Asset</label>
                            <input disabled />
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
                                ref={namaRef}
                                onChange={(e) =>
                                    setValue({ ...value, nama: e.target.value })
                                }
                            />
                        </div>
                        <div className="formasset_input">
                            <label>Merk</label>
                            <Formautofill data={merk} handle={handleMerk} />
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
        </React.Fragment>
    );
};

export default FormAsset;
