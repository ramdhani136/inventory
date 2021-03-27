import React from "react";
import "./itemassetlist.scss";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Itemassetlist = ({ data }) => {
    return (
        <React.Fragment>
            {data.map((item, index) => (
                <tr key={index}>
                    <td style={{ paddingLeft: 20 }}>{index+1}</td>
                    <td>
                        <input type="checkbox" name="selectitem" />
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
                        <EditTwoToneIcon style={{ fontSize: 19 }} />
                        &nbsp;
                        <DeleteForeverTwoToneIcon style={{ fontSize: 19 }} />
                    </td>
                </tr>
            ))}
        </React.Fragment>
    );
};

export default Itemassetlist;
