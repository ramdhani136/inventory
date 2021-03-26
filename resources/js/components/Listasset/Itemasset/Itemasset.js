import React, { useEffect, useState } from "react";
import "./itemasset.scss";
import { Itemassetlist } from "../..";
import axios from "axios";
import { API_URL } from "../../../utils/Utils";

const Itemasset = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "items").then((res) => {
            setItems(res.data.data);
        });
    }, [items]);

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
                    {items.map((item, index) => (
                        <Itemassetlist
                            key={index}
                            nomor={index + 1}
                            kode={item.kode}
                            item={item.item}
                            satuan={item.id_satuan}
                            kategori={item.id_kategori}
                            tgl={item.tanggal}
                            status={item.kondisi}
                            id={item.id}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Itemasset;
