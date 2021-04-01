import React, { useEffect, useState } from "react";
import "./itemasset.scss";
import { Itemassetlist } from "../..";
import { API_URL } from "../../../utils/Utils";

const Itemasset = ({ value, filter, allvalue }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const control = new AbortController();
        const getItems = async () => {
            const api = API_URL + "items";
            const result = await fetch(api, { signal: control.signal });
            const getResult = await result.json();
            setItems(
                getResult.data.map((item) => {
                    return {
                        select: false,
                        ...item,
                    };
                })
            );
        };

        getItems();
        return () => {
            control.abort();
        };
    }, []);

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
                            <input
                                type="checkbox"
                                name="selectitem"
                                onChange={(e) => {
                                    let checked = e.target.checked;
                                    setItems(
                                        items.map((item) => {
                                            item.select = checked;
                                            return item;
                                        })
                                    );
                                }}
                            />
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
