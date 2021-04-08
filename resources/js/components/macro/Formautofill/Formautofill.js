import React, { useEffect, useState } from "react";
import "./Formautofill.scss";

const Formautofill = ({ data, handle, nama, valid }) => {
    const [Datafilter, setDatafilter] = useState([]);
    const [toggle, setToggle] = useState(false);
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
                    onMouseLeave={() => setToggle(false)}
                >
                    <div
                        className="formautofill_input"
                        onMouseMove={() => {
                            setToggle(true);
                        }}
                    >
                        <input
                            className={valid ? "wajib" : null}
                            style={{ border: "solid 1px #fff" }}
                            value={valueSearch}
                            onClick={() => {
                                setToggle(true);
                                setValueSearch("");
                                handle({});
                            }}
                            onChange={(e) => setValueSearch(e.target.value)}
                        ></input>
                    </div>
                    {toggle ? (
                        <div className="formautofill_option">
                            {Datafilter.map((list, index) => (
                                <a
                                    key={index}
                                    onClick={() => {
                                        setToggle(false);
                                        handle(list);
                                        setValueSearch(list.nama);
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
