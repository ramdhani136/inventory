import React, { useState } from "react";
import { Itemasset } from "../../components";
import "./listasset.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Listasset = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="asset">
            <div className="asset_title">
                <div className="asset_title_left">List Asset</div>
                <div className="asset_title_right">
                    <input type="text" value={search} placeholder="Pencarian data .." onChange={(e)=>setSearch(e.target.value)}></input>
                    <button className="btn-purple">Input Asset</button>
                </div>
            </div>
            <div className="asset_content">
                <div className="asset_content_left">
                    <div className="asset_content_left_item">
                        <b>VIEW</b>
                        <a>
                            Reports
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                            />
                        </a>
                    </div>
                    <div className="asset_content_left_item">
                        <b>FILTER BY</b>
                        <a>
                            Kategori
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                            />
                            <h6
                                style={{
                                    fontSize: "1em",
                                    fontStyle: "italic",
                                    color: "#757afd",
                                }}
                            >
                                Laptop
                            </h6>
                        </a>
                        <a>
                            Tgl_asset
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                            />
                        </a>
                        <a>
                            Satuan
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                            />
                        </a>
                        <a>
                            Status
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                            />
                            <h6
                                style={{
                                    fontSize: "1em",
                                    fontStyle: "italic",
                                    color: "#757afd",
                                }}
                            >
                                Baik
                            </h6>
                        </a>
                        <a>
                            Users
                            <ArrowDropDownIcon
                                style={{ fontSize: "18px", marginLeft: "-1%" }}
                            />
                        </a>
                    </div>
                    <div className="asset_content_left_item">
                        <b>
                            TAGS
                            <ArrowDropDownIcon
                                style={{
                                    fontSize: "18px",
                                    marginLeft: "-2%",
                                    color: "black",
                                    cursor: "pointer",
                                }}
                            />
                        </b>
                    </div>
                </div>
                <div className="asset_content_right">
                    <Itemasset value={search} />
                </div>
            </div>
        </div>
    );
};

export default Listasset;
