import React, { useEffect, useState } from "react";
import "./Formautofill.scss";

const Formautofill = ({ data, handle, nama, valid, value, disabled }) => {
    const [Datafilter, setDatafilter] = useState([]);
    const [toggle, setToggle] = useState({ value: true, input: false });
    const [valueSearch, setValueSearch] = useState(" ");

    useEffect(() => {
        setDatafilter(datafilter);
    }, [valueSearch]);

    const datafilter = () => {
        return data.filter(
            (row) =>
                row.nama.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1
        );
    };

    return (
        <React.Fragment>
            <div className="form">
                <label>{nama}</label>
                <div
                    className="formautofill"
                    onMouseLeave={() =>
                        setToggle({
                            input: false,
                            value: true,
                        })
                    }
                >
                    <div
                        className={
                            disabled
                                ? "formautofill_input disabled"
                                : value
                                ? "formautofill_input"
                                : "formautofill_input wajib"
                        }
                        onClick={() => {
                            if (disabled === false) {
                                setToggle({ value: false, input: true });
                                setValueSearch("");
                            }
                        }}
                    >
                        {toggle.value ? (
                            <a
                                onClick={() => {
                                    if (disabled === false) {
                                        setToggle({
                                            value: false,
                                            input: true,
                                        });
                                        setValueSearch("");
                                    }
                                }}
                            >
                                {value}
                            </a>
                        ) : null}
                        {toggle.input ? (
                            <input
                                className={valid ? "wajib" : null}
                                style={{ border: "solid 1px #fff" }}
                                onChange={(e) => setValueSearch(e.target.value)}
                            />
                        ) : null}
                    </div>
                    {toggle.input ? (
                        <div className="formautofill_option">
                            {Datafilter.map((list, index) => (
                                <a
                                    key={index}
                                    onClick={() => {
                                        setToggle({
                                            input: false,
                                            value: true,
                                        });
                                        handle(list);
                                        setValueSearch("");
                                    }}
                                >
                                    {list.nama}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Formautofill;
