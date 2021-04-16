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
    aktifMenu,
    actionCancel,
    actionSave,
    actionDelete,
    actionSubmit,
    actionAmend,
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
                                : "red"
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

                {handleMenu ? (
                    <div>
                        <button onClick={handleMenu} className="btn-grey">
                            {btnName.menu}
                            <ArrowDropDownIcon
                                style={{ fontSize: "20px", marginTop: "-2px" }}
                            />
                        </button>
                        {aktifMenu.menu ? (
                            <div
                                style={{ marginLeft: "-10%" }}
                                className="title_list"
                            >
                                {status === "Approved" ? <a>Print</a> : null}
                                {status !== "Approved" ? <a>Print</a> : null}
                            </div>
                        ) : null}
                    </div>
                ) : null}
                {handleAction ? (
                    <div>
                        <button
                            onClick={handleAction}
                            className="btn-purple ml-1"
                        >
                            {btnName.action}
                            <ArrowDropDownIcon
                                style={{ fontSize: "20px", marginTop: "-2px" }}
                            />
                        </button>
                        {aktifMenu.aksi ? (
                            <div
                                style={{ marginLeft: "-9%" }}
                                className="title_list"
                            >
                                {status === "Approved" ? (
                                    <a onClick={actionCancel}>Cancel</a>
                                ) : null}
                                {status === "Pending" ? (
                                    <a onClick={actionSave}>Save</a>
                                ) : null}
                                {status === "Pending" ? (
                                    <a onClick={actionDelete}>Delete</a>
                                ) : null}
                                {status === "Pending" ? (
                                    <a onClick={actionSubmit}>Submit</a>
                                ) : null}
                                {status === "Canceled" ? (
                                    <a onClick={actionAmend}>Amend</a>
                                ) : null}
                                {status === "Canceled" ? (
                                    <a onClick={actionDelete}>Delete</a>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                ) : null}
                {handleSubmit ? (
                    <button
                        style={{ paddingLeft: "5%", paddingRight: "5%" }}
                        onClick={handleSubmit}
                        className="btn-purple"
                    >
                        {btnName.submit}
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default TitleComponent;
