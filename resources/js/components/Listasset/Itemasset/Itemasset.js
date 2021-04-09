import React, { useEffect, useState } from "react";
import "./itemasset.scss";
import { Itemassetlist } from "../..";
import { API_URL } from "../../../utils/Utils";
import _ from "lodash";

const Itemasset = ({ value, allvalue }) => {
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
    }, [value, allvalue]);

    const filterdata = (a) => {
        return _.filter(a, function (query) {
            var kategori = allvalue.kategori.id
                    ? query.id_kategori == allvalue.kategori.id
                    : true,
                satuan = allvalue.satuan.id
                    ? query.id_satuan == allvalue.satuan.id
                    : true,
                status = allvalue.status
                    ? query.status == allvalue.status
                    : true,
                item = value
                    ? query.item.toLowerCase().includes(value.toLowerCase())
                    : true,
                kode = value
                    ? query.kode.toLowerCase().includes(value.toLowerCase())
                    : true,
                kondisi = allvalue.kondisi
                    ? query.kondisi == allvalue.kondisi
                    : true;
            return kategori && satuan && kondisi && status && (item || kode);
        });
    };

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
                        <th>Status</th>
                        <th>Satuan</th>
                        <th>Kategori</th>
                        <th>Tgl Asset</th>
                    </tr>
                </thead>
                <tbody>
                    <Itemassetlist data={filterdata(items)} />
                </tbody>
            </table>
            {filterdata(items).length > 0 ? null : (
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
