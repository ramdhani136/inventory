import React, { useState } from "react";
import "./leftcontentcomponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectLeftContent } from "../../../features/dataSlice";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const LeftContentComponent = () => {
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
                <div className="leftContent"></div>
            )}
        </React.Fragment>
    );
};

export default LeftContentComponent;
