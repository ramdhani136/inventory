import React, { useState } from "react";
import "./titlecomponent.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const TitleComponent = ({
    value,
    input,
    title,
    btnName,
    handleSubmit,
    handleMenu,
    handleAction,
    status,
}) => {
    const [search, setSearch] = useState(value);

    return (
        <div className="title">
            <div className="title_left">
                {title}
                {status ? (
                    <FiberManualRecordIcon
                        style={{
                            fontSize: "11px",
                            marginLeft: "3%",
                            marginTop: "1.6px",
                        }}
                        className={
                            status === "Pending"
                                ? "btn-grey"
                                : status === "Approved"
                                ? "green"
                                : "btn-red"
                        }
                    />
                ) : null}
                <a
                    style={{
                        fontSize: "12.5px",
                        fontWeight: "bold",
                        color: "grey",
                        marginLeft: "0.3%",
                    }}
                >
                    {status}
                </a>
            </div>
            <div className="title_right">
                {input ? (
                    <input
                        type="text"
                        value={search}
                        placeholder="Pencarian data .."
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                ) : null}
                {handleSubmit ? (
                    <button onClick={handleSubmit} className="btn-purple">
                        {btnName.submit}
                    </button>
                ) : null}
                {handleMenu ? (
                    <button onClick={handleMenu} className="btn-grey">
                        {btnName.menu}
                        <ArrowDropDownIcon
                            style={{ fontSize: "20px", marginTop: "-2px" }}
                        />
                    </button>
                ) : null}
                {handleAction ? (
                    <button onClick={handleAction} className="btn-purple ml-1">
                        {btnName.action}
                        <ArrowDropDownIcon
                            style={{ fontSize: "20px", marginTop: "-2px" }}
                        />
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default TitleComponent;
