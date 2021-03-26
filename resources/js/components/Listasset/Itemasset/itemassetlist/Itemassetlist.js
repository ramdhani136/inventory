import React from "react";
import "./itemassetlist.scss";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Itemassetlist = ({
    nomor,
    kode,
    item,
    satuan,
    kategori,
    tgl,
    status,
    id,
}) => {
    return (
        <React.Fragment>
            <tr>
                <td style={{ paddingLeft: 20 }}>{nomor}</td>
                <td>
                    <input type="checkbox" name="selectitem" />
                </td>
                <td>{kode}</td>
                <td
                    style={{
                        fontSize: "0.95em",
                        color: "rgb(77, 76, 76)",
                    }}
                >
                    {item}
                </td>
                <td>{satuan}</td>
                <td>{kategori}</td>
                <td>{tgl}</td>
                <td>
                    <FiberManualRecordIcon
                        className={
                            status === "Baik"
                                ? "itemasset_status"
                                : "itemasset_status_none"
                        }
                    />
                    {status}
                </td>
                <td style={{ cursor: "pointer", color: "rgb(131, 130, 130)" }}>
                    <EditTwoToneIcon style={{ fontSize: 19 }} />
                    &nbsp;
                    <DeleteForeverTwoToneIcon style={{ fontSize: 19 }} />
                </td>
            </tr>
        </React.Fragment>
    );
};

export default Itemassetlist;