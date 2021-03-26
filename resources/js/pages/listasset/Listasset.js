import React from "react";
import { Itemasset } from "../../components";
import "./listasset.scss";

const Listasset = () => {
    return (
        <div className="asset">
            <div className="asset_title">
                <div className="asset_title_left">List Asset</div>
                <div className="asset_title_right">
                    <input type="text" placeholder="Pencarian data .."></input>
                    <button className="btn-purple">Input Asset</button>
                </div>
            </div>
            <div className="asset_content">
                <div className="asset_content_left"></div>
                <div className="asset_content_right">
                    <Itemasset/>
                </div>
            </div>
        </div>
    );
};

export default Listasset;
