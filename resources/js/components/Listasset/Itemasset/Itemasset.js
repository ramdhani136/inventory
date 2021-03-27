import React, { useEffect, useState } from "react";
import "./itemasset.scss";
import { Itemassetlist } from "../..";
import axios from "axios";
import { API_URL } from "../../../utils/Utils";

const Itemasset = ({ value }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "items").then((res) => {
            setItems(res.data.data);
        });
    }, [items]);

    function search(rows) {
        return rows.filter(
            (row) =>
                row.item.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                row.kode.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
    }

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
                    <Itemassetlist data={search(items)} />
                </tbody>
            </table>
            {items.length < 0 || search(items).length ? null : (
                <p
                    style={{
                        textAlign: "center",
                        padding: "140px 0px 0px 0px",
                        color: "rgb(202, 200, 200)",
                        fontSize: "0.9em",
                    }}
                >
                    Data tidak ditemukan
                </p>
            )}
        </div>
    );
};

export default Itemasset;
