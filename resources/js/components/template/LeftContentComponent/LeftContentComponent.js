import React, { useState } from "react";
import "./leftcontentcomponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectLeftContent } from "../../../features/dataSlice";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import QRCode from "qrcode.react";

const LeftContentComponent = ({ qrcode }) => {
    const data = useSelector(selectLeftContent);
    const [sort, setSort] = useState("");

    const [value, setValue] = useState({});

    return (
        <React.Fragment>
            {data.aktif ? (
                <div className="leftContent">
                    <b style={{ marginLeft: "38%" }}>FILTER BY</b>
                    {data.filters.map((filter, index) => (
                        <div key={index} className="leftvalue">
                            <a>{filter.nama}</a>
                            <ArrowDropDownIcon
                                onClick={() => setSort(filter.id)}
                            />
                            {filter.id === sort ? (
                                <div className="leftContent_list">
                                    <h5 onClick={() => setSort("")}>
                                        Semua Data
                                    </h5>
                                    {filter.data.map((listdata, idnya) => (
                                        <h5
                                            onClick={() => {
                                                setSort("");
                                            }}
                                            key={idnya}
                                        >
                                            {listdata.nama}
                                        </h5>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="leftContent">
                    {qrcode ? (
                        <div className="leftContent_qrcode">
                            <QRCode
                                value={qrcode}
                                className="qrcode"
                                includeMargin={true}
                                bgColor={"#ffffff"}
                                size={150}
                                imageSettings={{
                                    src: "http://etm.digitalasiasolusindo.com/assets/erpnext/images/erp-icon.svg",
                                    x: null,
                                    y: null,
                                    height: 24,
                                    width: 24,
                                    excavate: true,
                                }}
                            />
                            <div
                                style={{ fontSize: "0.9em" }}
                                className="qrcode_title"
                            >
                                {qrcode}
                            </div>
                        </div>
                    ) : null}
                </div>
            )}
        </React.Fragment>
    );
};

export default LeftContentComponent;
