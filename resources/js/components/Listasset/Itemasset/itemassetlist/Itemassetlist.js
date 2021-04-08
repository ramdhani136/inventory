import React, { useEffect, useState } from "react";
import "./itemassetlist.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Itemassetlist = ({ data }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, [data]);

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
                    <td>
                        <FiberManualRecordIcon
                            className={
                                item.status === "0"
                                    ? "itemasset_pending"
                                    : item.status === "1"
                                    ? "itemasset_approved"
                                    : "itemasset_canceled"
                            }
                        />
                        {item.status === "0"
                            ? "Pending"
                            : item.status === "1"
                            ? "Approved"
                            : "Canceled"}
                    </td>
                    <td>{item.satuan}</td>
                    <td>{item.kategori}</td>
                    <td>{item.tanggal}</td>
                </tr>
            ))}
        </React.Fragment>
    );
};

export default Itemassetlist;
