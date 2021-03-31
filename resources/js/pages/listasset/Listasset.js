import React, { useEffect, useState } from "react";
import { Itemasset } from "../../components";
import "./listasset.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { API_URL } from "../../utils/Utils";

const Listasset = () => {
    const defaultfilter = {
        kategori: false,
        satuan: false,
        kondisi: false,
        users: false,
    };

    const defaultvalue = {
        kategori: {},
        satuan: {},
        kondisi: "",
        users: {},
    };

    const [search, setSearch] = useState("");
    const [kategories, setKategories] = useState([]);
    const [satuan, setSatuan] = useState([]);
    const [value, setValue] = useState(defaultvalue);
    const [filter, setFilter] = useState(defaultfilter);

    useEffect(() => {
        const control = new AbortController();

        
        const getKategories = async () => {
            const api = API_URL+"kategori";
            const result = await fetch(api, { signal: control.signal });
            const getResult = await result.json();
            setKategories(getResult.data);
        };

        const getSatuan = async () => {
            const api =  API_URL+"satuan";
            const result = await fetch(api, { signal: control.signal });
            const getResult = await result.json();
            setSatuan(getResult.data);
        };

        getKategories();
        getSatuan();

        return () => {
            control.abort();
        };
    }, [kategories, satuan,value ]);

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
                    <button className="btn-purple">Input Asset</button>
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
                                        {" "}
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
                            Users
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                            />
                            {/* <div className="asset_select">
                                <a>Monitor</a>
                                <a>PC</a>
                                <a>Printer</a>
                                <a>UPS</a>
                                <a>Flashdisk</a>
                                <a>Laptop</a>
                            </div> */}
                        </a>
                    </div>
                </div>
                <div className="asset_content_right">
                    <Itemasset
                        value={search}
                        filter={filter}
                        allvalue={value}
                    />
                </div>
            </div>
        </div>
    );
};

export default Listasset;
