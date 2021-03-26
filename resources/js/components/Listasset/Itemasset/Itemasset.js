import React from "react";
import "./itemasset.scss";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Itemassetlist } from "../..";

const Itemasset = () => {
    return (
        <div className="itemasset">
            <table>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: 20 }}>No</th>
                        <th>
                            <input type="checkbox" name="selectitem" />
                        </th>
                        <th>Kode Asset</th>
                        <th>Item</th>
                        <th>Satuan</th>
                        <th>Kategori</th>
                        <th>Tgl Asset</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <Itemassetlist
                        nomor="1"
                        kode="MJ-0001"
                        item="Meja Kayu"
                        satuan="Unit"
                        kategori="Meja"
                        tgl="25 Desember 2009"
                        status="Baik"
                        id="1"
                    />
                    <Itemassetlist
                        nomor="2"
                        kode="PRT-0001"
                        item="Printer Laser Jet"
                        satuan="Unit"
                        kategori="Printer"
                        tgl="30 Desember 2010"
                        status="Rusak"
                        id="2"
                    />
                    <Itemassetlist
                        nomor="3"
                        kode="LPT-0001"
                        item="Toshiba MD24A"
                        satuan="Unit"
                        kategori="Laptop"
                        tgl="20 Maret 2021"
                        status="Baik"
                        id="3"
                    />
                </tbody>
            </table>
        </div>
    );
};

export default Itemasset;
