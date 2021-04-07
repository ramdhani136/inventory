import React, { useEffect, useState } from "react";
import "./Formautofill.scss";

const Formautofill = ({ data, handle,nama,valid }) => {
    const [value, setValue] = useState({});
    const [toggle, setToggle] = useState(false);

    const seacrinput = (e) => {
        setValue({ nama: e });
    };

    return (
        <React.Fragment>
            <div className="form">
                <label>{nama}</label>
                <div
                    className="formautofill"
                    onMouseLeave={() => setToggle(false)}
                >
                    <div className="formautofill_input">
                        <input
                            className={valid?"wajib":null}
                            value={value.nama || ""}
                            style={{ border: "solid 1px #fff" }}
                            onClick={() => setToggle(true)}
                            onChange={(e) => seacrinput(e.target.value)}
                        ></input>
                    </div>
                    {toggle ? (
                        <div className="formautofill_option">
                            {data.map((list, index) => (
                                <a
                                    key={index}
                                    onClick={() => {
                                        setValue(list);
                                        setToggle(false);
                                        handle(list);
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
