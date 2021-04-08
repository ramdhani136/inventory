import React, { useEffect, useState } from "react";
import { Itemasset } from "../../components";
import "./listasset.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { API_URL } from "../../utils/Utils";
import { useHistory } from "react-router";

const Listasset = () => {
    const defaultfilter = {
        kategori: false,
        satuan: false,
        kondisi: false,
        status: false,
    };

    const defaultvalue = {
        kategori: {},
        satuan: {},
        kondisi: "",
        status: "",
    };

    const history = useHistory();

    const [search, setSearch] = useState("");
    const [kategories, setKategories] = useState([]);
    const [satuan, setSatuan] = useState([]);
    const [value, setValue] = useState(defaultvalue);
    const [filter, setFilter] = useState(defaultfilter);

    useEffect(() => {
        const controlCategories = new AbortController();

        const getKategories = async () => {
            try {
                const api = API_URL + "kategori";
                const resultCategories = await fetch(api, {
                    signal: controlCategories.signal,
                });
                const getCategories = await resultCategories.json();
                setKategories(getCategories.data);
            } catch (error) {
                if (error.name === "AbortError") {
                    return null;
                } else {
                    throw error;
                }
            }
        };
        getKategories();
        return () => {
            controlCategories.abort();
        };
    }, [kategories, value]);

    useEffect(() => {
        const controlSatuan = new AbortController();
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
        getSatuan();
        return () => {
            controlSatuan.abort();
        };
    }, [satuan]);

    return (
        <div className="asset">
            <div className="asset_title">
                <div className="asset_title_left">List Asset</div>
                <div className="asset_title_right">
                    <input
                        type="text"
                        value={search}
                        placeholder="Pencarian data .."
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                    <button
                        onClick={() => history.push("/form/asset")}
                        className="btn-purple"
                    >
                        Input Asset
                    </button>
                </div>
            </div>
            <div className="asset_content">
                <div className="asset_content_left">
                    <div className="asset_content_left_item">
                        <b>FILTER BY</b>
                        <a>
                            Kategori
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                                onClick={() =>
                                    setFilter({
                                        ...defaultfilter,
                                        kategori: true,
                                    })
                                }
                            />
                            {filter.kategori ? (
                                <div className="asset_select">
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                kategori: {},
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Semua Kategori
                                    </h5>
                                    {kategories.map((item, index) => (
                                        <h5
                                            key={index}
                                            onClick={() => {
                                                setValue({
                                                    ...value,
                                                    kategori: item,
                                                });
                                                setFilter(defaultfilter);
                                            }}
                                        >
                                            {item.nama}
                                        </h5>
                                    ))}
                                </div>
                            ) : null}
                            {value.kategori !== "" ? (
                                <h6
                                    style={{
                                        fontSize: "1em",
                                        fontStyle: "italic",
                                        color: "#757afd",
                                        marginBottom: "5px",
                                    }}
                                >
                                    {value.kategori.nama}
                                </h6>
                            ) : null}
                        </a>
                        <a>
                            Satuan
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                                onClick={() =>
                                    setFilter({
                                        ...defaultfilter,
                                        satuan: true,
                                    })
                                }
                            />
                            {filter.satuan ? (
                                <div className="asset_select">
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                satuan: {},
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Semua data
                                    </h5>
                                    {satuan.map((item, index) => (
                                        <h5
                                            key={index}
                                            onClick={() => {
                                                setValue({
                                                    ...value,
                                                    satuan: item,
                                                });
                                                setFilter(defaultfilter);
                                            }}
                                        >
                                            {item.nama}
                                        </h5>
                                    ))}
                                </div>
                            ) : null}
                            {value.satuan !== "" ? (
                                <h6
                                    style={{
                                        fontSize: "1em",
                                        fontStyle: "italic",
                                        color: "#757afd",
                                        marginBottom: "5px",
                                    }}
                                >
                                    {value.satuan.nama}
                                </h6>
                            ) : null}
                        </a>
                        <a>
                            Kondisi
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                                onClick={() =>
                                    setFilter({
                                        ...defaultfilter,
                                        kondisi: true,
                                    })
                                }
                            />
                            {filter.kondisi ? (
                                <div className="asset_select">
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                kondisi: "",
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Semua data
                                    </h5>
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                kondisi: "Baik",
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Baik
                                    </h5>
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                kondisi: "Buruk",
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Buruk
                                    </h5>
                                </div>
                            ) : null}
                            {value.kondisi ? (
                                <h6
                                    style={{
                                        fontSize: "1em",
                                        fontStyle: "italic",
                                        color: "#757afd",
                                    }}
                                >
                                    {value.kondisi}
                                </h6>
                            ) : null}
                        </a>
                        <a>
                            Status
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                                onClick={() =>
                                    setFilter({
                                        ...defaultfilter,
                                        status: true,
                                    })
                                }
                            />
                            {filter.status ? (
                                <div className="asset_select">
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                status: "",
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Semua data
                                    </h5>
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                status: "0",
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Pending
                                    </h5>
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                status: "1",
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Approved
                                    </h5>
                                    <h5
                                        onClick={() => {
                                            setValue({
                                                ...value,
                                                status: "2",
                                            });
                                            setFilter(defaultfilter);
                                        }}
                                    >
                                        Canceled
                                    </h5>
                                </div>
                            ) : null}
                            {value.status ? (
                                <h6
                                    style={{
                                        fontSize: "1em",
                                        fontStyle: "italic",
                                        color: "#757afd",
                                    }}
                                >
                                    {value.status === "0"
                                        ? "Pending"
                                        : value.status === "1"
                                        ? "Approved"
                                        : "Canceled"}
                                </h6>
                            ) : null}
                        </a>
                    </div>
                </div>
                <div className="asset_content_right">
                    <Itemasset
                        value={search}
                        allvalue={value}
                    />
                </div>
            </div>
        </div>
    );
};

export default Listasset;
