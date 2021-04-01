import React, { useEffect, useState } from "react";
import "./itemassetlist.scss";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Itemassetlist = ({ data }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, [data,items]);

    return (
        <React.Fragment>
            {items.map((item, index) => (
                <tr className={item.select ? "item_select" : null} key={index}>
                    <td style={{ paddingLeft: 20 }}>{index + 1}</td>
                    <td>
                        <input
                            onChange={(event) => {
                                let checked = event.target.checked;
                                setItems(
                                    items.map((d) => {
                                        if (item.id === d.id) {
                                            d.select = checked;
                                        }
                                        return d;
                                    })
                                );
                            }}
                            type="checkbox"
                            name="checkbox"
                            checked={item.select}
                        />
                    </td>
                    <td>{item.kode}</td>
                    <td
                        style={{
                            fontSize: "0.95em",
                            color: "rgb(77, 76, 76)",
                        }}
                    >
                        {item.item}
                    </td>
                    <td>{item.satuan}</td>
                    <td>{item.kategori}</td>
                    <td>{item.tanggal}</td>
                    <td>
                        <FiberManualRecordIcon
                            className={
                                item.kondisi === "Baik"
                                    ? "itemasset_status"
                                    : "itemasset_status_none"
                            }
                        />
                        {item.kondisi}
                    </td>
                    <td
                        style={{
                            cursor: "pointer",
                            color: "rgb(131, 130, 130)",
                        }}
                    >
                        <DeleteForeverTwoToneIcon style={{ fontSize: 19 }} />
                    </td>
                </tr>
            ))}
        </React.Fragment>
    );
};

export default Itemassetlist;
